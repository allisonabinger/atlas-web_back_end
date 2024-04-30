#!/usr/bin/env python3
""" type-annotated func: takes float and returns func to multiply """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ returns function that multiplies float by given multiplier"""
    def multiplier_function(x: float) -> float:
        """ multiplies float by multiplier """
        return x * multiplier
    return multiplier_function
