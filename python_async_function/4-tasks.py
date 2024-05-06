#!/usr/bin/env python3
"""basics of async: Task 4"""
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """uses task_wait_random to duplicate outcomes of task 1"""
    async_tasks = [task_wait_random(max_delay) for _ in range(n)]

    return [await index for index in asyncio.as_completed(async_tasks)]
