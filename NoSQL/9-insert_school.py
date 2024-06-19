#!/usr/bin/env python3
"""Task 9: Inserting a new doc"""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new file into a collection"""
    res = mongo_collection.insert_one(kwargs)

    return res.inserted_id
