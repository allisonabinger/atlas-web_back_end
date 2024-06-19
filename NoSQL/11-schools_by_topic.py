#!/usr/bin/env python3
"""Task 11: returns list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """returns schools with given topic"""
    q = {"topics": topic}
    return mongo_collection.find(q)
