#!/usr/bin/python3
"""Writes Strings to Redis"""
import redis
import uuid
from typing import Union


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
