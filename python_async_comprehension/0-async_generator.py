#!/usr/bin/env python3
from typing import Generator
import asyncio
import random
"""Async Comprehensions and Generators: Task 0"""


async def async_generator() -> Generator[float, None, None]:
    """Loops 10 times and generates a random num"""
    for _ in range(10):
        await asyncio.sleep(1)
        number: float = random.uniform(0, 10)
        yield number
