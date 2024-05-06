#!/usr/bin/env python3
"""Basics of Async - Task 2"""
import time
import asyncio
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures average exec time per iteration of wait_n)"""
    start: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end: float = time.time()
    total: float = end - start
    return total / n
