#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            # truncated_dataset = dataset[:1000] removed since not accessed
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """returns dictionary with pagination metadata, resilient to del."""

        assert isinstance(index, int) and 0 <= index < len(self.indexed_dataset()), "index must be within valid range"  # noqa: E501
        assert isinstance(page_size, int) and page_size > 0, "page_size must be a positive integer"  # noqa: E501

        dataset = self.indexed_dataset()
        data = []
        next_index = index
        current_index = index

        while len(data) < page_size and current_index < len(dataset):
            item = dataset.get(current_index)
            if item is not None:
                data.append(item)
            next_index = current_index + 1
            current_index += 1

        return {
            "index": index,
            "next_index": next_index if next_index < len(dataset) else None,
            "page_size": len(data),
            "data": data
        }
