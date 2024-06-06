#!/usr/bin/env python3
"""Writes Strings to Redis"""
import redis
import uuid
from typing import Union, Callable, Optional
import functools


def count_calls(method: Callable) -> Callable:
    """Decorator to count calls to a method"""
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """wrapper func to count calls and call the original method"""
        """uses the qualified name of the method as key to track # of calls"""
        key = method.__qualname__
        self._redis.incr(key)
        return method(self, *args, **kwargs)
    return wrapper


def call_history(method: Callable) -> Callable:
    """decorator that stores the history of inputs and outputs
    for a function using RPUSH"""
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """wrapper func to store input and outputs in Redis lists"""
        input_key = method.__qualname__ + ":inputs"
        output_key = method.__qualname__ + ":outputs"

        """normalizes input args"""
        self._redis.rpush(input_key, str(args))
        """execute method to get output"""
        result = method(self, *args, **kwargs)
        """store outpute in redis output list"""
        self._redis.rpush(output_key, str(result))
        return result
    return wrapper


class Cache:
    """defines the Cache Class"""
    def __init__(self):
        """init method for Cache Class"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """stores a key/data set"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[str, bytes, int, float, None]:  # noqa
        """retrieves value from Redis using the provided key"""
        value = self._redis.get(key)
        if value is None:
            return None
        if fn:
            return fn(value)
        return value

    def get_str(self, key: str) -> Optional[str]:
        """uses the get method with lamba function to decode byte string"""
        return self.get(key, fn=lambda x: x.decode('utf-8'))

    def get_int(self, key: str) -> Optional[int]:
        """uses get method with int to convert byte string to integer"""
        return self.get(key, fn=int)


def replay(method: Callable):
    """displays history of calls of a function"""
    redis_instance = method.__self__._redis
    method_name = method.__qualname__

    input_key = method.__qualname__ + ":inputs"
    output_key = method.__qualname__ + ":outputs"

    inputs = redis_instance.lrange(input_key, 0, -1)
    outputs = redis_instance.lrange(output_key, 0, -1)

    call_count = len(inputs)

    print(f"{method_name} was called {call_count}" + " times:")
    for input_args, output in zip(inputs, outputs):
        print(f"{method_name}(*{input_args.decode('utf-8')}) -> {output.decode('utf-8')}")  # noqa
