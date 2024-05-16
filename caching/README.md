  <h1 align="center">
  <img src="https://static-00.iconduck.com/assets.00/cache-icon-2048x1986-kwtj7znt.png" align="left" width="50">
   Caching - Python
  <img src="https://static-00.iconduck.com/assets.00/cache-icon-2048x1986-kwtj7znt.png" align="right" width="50"></h1>


## Intro
This project consists of several tasks designed to build an intermediate understanding of caching in Python.

## Learning Objectives

1. **What is a caching system?**

2. **What is FIFO and LIFO?**

3. **What is LRU, MRU, and LFU?**

4. **What is the purpose of a caching system?**
   
5. **What limits do a caching system have?**

---
---
&nbsp;
&nbsp;
&nbsp;

# Concepts

## Resources and Descriptions
[*How to use caching with built-in methods in Python*](https://kadermiyanyedi.medium.com/how-to-use-caching-in-python-5d7a150dd30c)

[*FIFO*](https://en.wikipedia.org/wiki/Cache_replacement_policies#First_In_First_Out_%28FIFO%29) and [*LIFO*](https://en.wikipedia.org/wiki/Cache_replacement_policies#Last_In_First_Out_%28LIFO%29)

## What is caching? What is its purpose?
Caching is a technique used to store frequently accessed or recently accessed data in a temporary storage space, known as a cache. The purpose of caching is to improve data retrieval performance by reducing the time it takes to access the data. 

Within these projects, I am using Python classes that inherit from the BaseCaching class given to me by my instructor. The methods I've created will store data, retrieve data, utilize eviction policies, explore efficiency improvement, and learn the limitations of caches.

## FIFO and LIFO

### FIFO: First-In-First-Out
FIFO is a data structure and an eviction policy used in caching systems where the oldest item is removed first.

### LIFO: Last-In-First-Out
LIFO, also known as the stack, is another data structure and eviction policy where the newest items are removed first.

## LRU, MRU, LFU
[*Code Academy: Cache Eviction Policies*](https://www.codecademy.com/article/cache-eviction-policies)

### LRU: Least Recently Used
LRU replaces the item not requested for the longest time. It is implemented using a timestamp for last access. It requires some extra memory and needs to update the timestamps in the cache. It can better consider which items in the cache have been recently useful, and make it perform well when items are used frequently for a while, and then usage drops. 

**When to Use**

When you want to keep the most recently accessed data in the cache and evict the least recently accessed data when the cache is full. 

**Use Cases** 

Web servers - cache frequently acessed web pages or resources to reduce load time for users to ensure the cache stays up-to-date with user access patterns

Database query caching - cache the results of frequently executed database queries to avoid redundant query executions and prioritize recent and relevant data.

### MRU: Most Recently Used
MRU is an eviction policy that replaces the cache element used most recently, as if it is the opposite of LRU, except it still needs the same data and is similar to implement. It is useful in situations where the longer an item hasn't been used, the more likely it will come up next.

**When to Use**

Whenever you need to prioritize recent data access over older data access, especially where the most recent data tends to be more relevant or frequently accessed.

**Use Cases** 

Media Server - If the user has completed watching a video, they are most likely not going to want to view it again. 


### LFU: Least Frequently Used
LFU is an eviction policy in which the item in the cache used the least since its entry will be removed. It does not require access time storage, instead it stores the number of accesses since entry. It stores a counter instead of a timestamp.

**When to Use**

Whenever you need to prioritize caching items that are accessed frequently over those that are accessed infrequently, such as scenarious where the frequency of access is a more important factor than recency.

**Use Cases** 

Content recommendation systems - cache user preferences or item ratings to personalize content recommendations. Evicting less frequently accessed items ensures that the cache adapts to changing user preferences over time. 

File system caching - cache frequently accessed files or blocks to speed up file systems operations. Evicting files that are rarely accessed helps optimize storage usage and cache performance. 

&nbsp;
---
&nbsp;

# Code Examples and Highlighted Tasks

## FIFO / LIFO
[**Utilizing FIFO**](1-fifo_cache.py)

Inside of the FIFOCache class, there is a `self.queue` list that will keep track of each item as it is put into the cache_data. The `put` method will check to make sure the cache_data doesn't have the maximum amount of items before putting it into the `cache_data`. If it does, it will use `pop(0)` to assign a key to discard to the first item, and then discard it using `del`. After that, it can assign a new key-item pair and append it to the queue.

```
{
    def put(self, key, item):
    
        // see file for full method

        if len(self.cache_data) >= self.MAX_ITEMS:
            discarded_key = self.queue.pop(0)
            del self.cache_data[discarded_key]
            print(f"DISCARD: {discarded_key}")
}
```

------

[**Utilizing LIFO**](2-lifo_cache.py)

The LIFOCache class does the same thing that the FIFOCache class does, the only difference is the `pop()` method. Since it doesn't call `pop(0)`, it will assign the removal key to the last item. 

```
{
    def put(self, key, item):
    
        // see file for full method

        if len(self.cache_data) >= self.MAX_ITEMS:
            discarded_key = self.queue.pop()
            del self.cache_data[discarded_key]
            print(f"DISCARD: {discarded_key}")
}
```

------

## LRU / MRU
[**Utilizing LRU**](3-lru_cache.py)

Inside of the LRUCache class, it is similar to FIFO and LIFO, except it will keep track of an `access_order` list that will be updated whenever an item is added with `put` or accessed with `get`. For LRU, it will remove the least accessed item with `pop(0)`. 

```
{
    def put(self, key, item):
        // see file for full method

        """if the key is already there, it will remove the access order"""
        if key in self.cache_data:
            self.access_order.remove(key)

        elif len(self.cache_data) >= self.MAX_ITEMS:
            """uses pop to get key and delete least recently used item"""
            lru_key = self.access_order.pop(0)
            del self.cache_data[lru_key]
            print(f"DISCARD: {lru_key}")

    def get(self, key):
        """searchs for an item with a valid key input + updates the order"""
        if key is not None and key in self.cache_data:
            self.access_order.remove(key)
            self.access_order.append(key)
            return self.cache_data[key]
        return None
}
```

------

[**Utilizing MRU**](4-mru_cache.py)

The MRUCache class does the same thing as LRU, but similar to LIFO, it will remove the most recently accessed item with `pop()`. 

```
{
    def put(self, key, item):

        // see file for full method

        elif len(self.cache_data) >= self.MAX_ITEMS:
            """uses pop to get key and delete least recently used item"""
            lru_key = self.access_order.pop(0)
            del self.cache_data[lru_key]
            print(f"DISCARD: {lru_key}")
}
```


&nbsp;
---
&nbsp;

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
