#!/usr/bin/env python3
""" Type-annotated func: takes str and in or float and returns tuple """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ returns tuple with string k and v """
    return (k, v * v)
