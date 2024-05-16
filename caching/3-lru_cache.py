#!/usr/bin/python3
""" Task 3: LFU of Caching: Least Recently Used"""
BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """Inherits from BaseCaching -
    Uses queue to implement LRU eviction policies"""
    def __init__(self):
        """initiation"""
        super().__init__()
        self.access_order = []

    def put(self, key, item):
        """creates new key-item pair as long as input is valid"""
        if key is None or item is None:
            return

        """if the key is already there, it will remove the access order"""
        if key in self.cache_data:
            self.access_order.remove(key)

        elif len(self.cache_data) >= self.MAX_ITEMS:
            """uses pop to get key and delete least recently used item"""
            lru_key = self.access_order.pop(0)
            del self.cache_data[lru_key]
            print(f"DISCARD: {lru_key}")

        """append key to access order and assign pair to cache"""
        self.access_order.append(key)
        self.cache_data[key] = item

    def get(self, key):
        """searchs for an item with a valid key input + updates the order"""
        if key is not None and key in self.cache_data:
            self.access_order.remove(key)
            self.access_order.append(key)
            return self.cache_data[key]
        return None
