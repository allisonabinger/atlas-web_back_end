#!/usr/bin/python3
""" Task 0: Basics of Caching """


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """Basic Caching class inherited from BaseCaching with simple
    put and get methods"""

    def put(self, key, item):
        """creates new key-item pair as long as input is valid"""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """searches for item based on key as long as key is valid"""
        if key is not None:
            return self.cache_data.get(key)
        return None


# Example usage:
    # cache = BasicCache()
    # cache.put('a', 1)
    # cache.put('b', 2)
    #
    # print(cache.get('a')) -> Output: 1
    # print(cache.get('c')) -> Output: None
    #
