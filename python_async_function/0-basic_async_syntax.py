#!/usr/bin/env python3
import asyncio
import random
"""Understanding the basics of async with a corouting that waits"""


async def wait_random(max_delay: int = 10) -> float:
    """async coroutine that waits for a random delay before """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
