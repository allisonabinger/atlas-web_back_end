#!/usr/bin/env python3
"""Task 10: Changes topics of doc based on name"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school doc based on the name"""
    q = {"name": name}
    values = {"$set": {"topics": topics}}
    mongo_collection.update_many(q, values)
