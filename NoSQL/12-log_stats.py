#!/usr/bin/env python3
"""Task 12: provides stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient

HOST = 'localhost'
PORT = 27017
DATABASE_NAME = 'logs'
COLLECTION_NAME = 'nginx'

client = MongoClient(HOST, PORT)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

total_logs = collection.count_documents({})
print(f"{total_logs} logs")

http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
method_counts = {method: collection.count_documents({"method": method}) for method in http_methods}  # noqa

print("Methods:")
for method, count in method_counts.items():
    print(f"\tmethod {method}: {count}")

status_check = collection.count_documents({"method": "GET", "path": "/status"})  # noqa

print(f"{status_check} status check")
