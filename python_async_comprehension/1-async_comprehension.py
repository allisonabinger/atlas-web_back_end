#!/usr/bin/env python3
"""async comprehensions - task 1"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """async corouting to collect 10 random nums using gen. and return"""
    random_number = [
        random_number async for random_number in async_generator()
    ]
    return random_number
