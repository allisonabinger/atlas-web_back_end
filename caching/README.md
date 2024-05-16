  <h1 align="center">
  <img src="https://static.thenounproject.com/png/5075548-200.png" align="left" width="50">
   Caching - Python
  <img src="https://static.thenounproject.com/png/5075548-200.png" align="right" width="50"></h1>


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

## Code / Task
[**See Task Here**](task-link)

### Example
```
{
	// insert code here
}

(explanation of code)
```
```
{
	// insert code here
}

(explanation of code)
```

&nbsp;
---
&nbsp;

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
