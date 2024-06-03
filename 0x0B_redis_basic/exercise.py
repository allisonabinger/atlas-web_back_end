#!/usr/bin/python3
"""Writes Strings to Redis"""
import redis
import uuid
from typing import Union, Callable, Optional


class Cache:
    """defines the Cache Class"""
    def __init__(self):
        """init method for Cache Class"""
        self._redis = redis.Redis()
        self._redis.flushdb

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
