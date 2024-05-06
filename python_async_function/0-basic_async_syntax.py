#!/usr/bin/env python3
"""Understanding the basics of async with a corouting that waits"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """async coroutine that waits for a random delay before"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
