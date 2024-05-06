#!/usr/bin/env python3
"""Async Comprehensions and Generators: Task 0"""
from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]:  # type: ignore
    """Loops 10 times and generates a random num"""
    for _ in range(10):
        await asyncio.sleep(1)
        number: float = random.uniform(0, 10)
        yield number
