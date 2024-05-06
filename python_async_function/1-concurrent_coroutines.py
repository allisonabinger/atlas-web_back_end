#!/usr/bin/env python3
"""executes concurrent coroutines with async"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """waits for random delays using wait_random n times"""
    delays = []

    for _ in range(n):
        delays.append(asyncio.create_task(wait_random(max_delay)))

    return [await index for index in asyncio.as_completed(delays)]
