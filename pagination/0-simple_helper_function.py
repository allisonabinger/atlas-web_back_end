#!/usr/bin/env python3
""" Task 0: Simple Helper Function """


def index_range(page: int, page_size: int) -> tuple:
    """returns a tuple with the start and end index corresponding
    to the range of indices to return in a list for the pagination parameters
    given as page and page_size"""

    start_index = (page - 1) * page_size
    end_index = page * page_size - 1

    return start_index, end_index
