#!/usr/bin/env python3
"""Task 2: Hypermedia Pagination"""


import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """returns a tuple with the start and end index corresponding
    to the range of indices to return in a list for the pagination parameters
    given as page and page_size"""

    start_index: int = (page - 1) * page_size
    end_index: int = page * page_size

    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """finds the indices to paginate the dataset and return the
        appropriate page of the dataset (i.e. the correct list of rows)"""

        """Assures the input passed is valid"""
        assert isinstance(page, int) and page > 0, "Page = int > 0."
        assert isinstance(page_size, int) and page_size > 0, "PSize = int > 0"

        """retrieve dataset"""
        dataset = self.dataset()

        """retrieve start and end indices"""
        start_index, end_index = index_range(page, page_size)

        """returns page of dataset based on start and end indices """
        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """returns dictionary with pagination metadata"""
        data = self.get_page(page, page_size)
        dataset_length = len(self.dataset())
        total_pages = math.ceil(dataset_length / page_size)

        """dictionary of appropriate data"""
        hypermedia = {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }

        return hypermedia
