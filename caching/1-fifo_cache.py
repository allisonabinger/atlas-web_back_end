#!/usr/bin/python3
""" Task 1: FIFO of Caching: First In First Out"""
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    def __init__(self):
        """initiation"""
        super().__init__()
        self.queue = []
    
    def put(self, key, item):
        """creates new key-item pair as long as input is valid"""
        if key is None or item is None:
            return
        
        if len(self.cache_data) >= self.MAX_ITEMS:
            discarded_key = self.queue.pop(0)
            del self.cache_data[discarded_key]
            print(f"DISCARD: {discarded_key}")
        
        self.cache_data[key] = item
        self.queue.append(key)
