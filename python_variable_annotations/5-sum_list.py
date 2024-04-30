#!/usr/bin/env python3
""" Type-Annotated function: takes list and returns sum as a float """
from typing import List


def sum_list(input_list: List[float]) -> float:
    """ returns sum as a float """
    return sum(input_list)
