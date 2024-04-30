#!/usr/bin/env python3
""" Type-annotated function that takesa  mixed list and returns sum """
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ uses union in declaration to unionize the dif. types """
    return sum(mxd_lst)
