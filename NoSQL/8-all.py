#!/usr/bin/env python3
"""Task 8: uses python to list all docs from given collection"""


def list_all(mongo_collection):
    """lists all docs from given collection"""
    documents = list(mongo_collection.find())

    return documents
