#!/usr/bin/env python3
"""Task 12: provides stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def nginx_log_stats():
    """Delcare Vars for use"""
    HOST = 'localhost'
    PORT = 27017
    DATABASE_NAME = 'logs'
    COLLECTION_NAME = 'nginx'

    """Establish connection and gather collection"""
    client = MongoClient(HOST, PORT)
    db = client[DATABASE_NAME]
    collection = db[COLLECTION_NAME]

    """gather logs"""
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    """count methods"""
    http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: collection.count_documents({"method": method}) for method in http_methods}  # noqa

    """print method counts"""
    print("Methods:")
    for method, count in method_counts.items():
        print(f"\tmethod {method}: {count}")

    """gather status check counts"""
    status_check = collection.count_documents({"method": "GET", "path": "/status"})  # noqa

    """print number of status checks"""
    print(f"{status_check} status check")


if __name__ == "__main__":
    nginx_log_stats()
