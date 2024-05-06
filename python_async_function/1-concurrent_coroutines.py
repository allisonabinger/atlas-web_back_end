#!/usr/bin/env python3
"""executes concurrent coroutines with async"""
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """waits for random delays using wait_random n times"""
    delays = []

    for _ in range(n):
        delay = await wait_random(max_delay)
        i = 0
        while i < len(delays) and delays[i] < delay:
            i += 1
        delays.insert(i, delay)
    return delays
