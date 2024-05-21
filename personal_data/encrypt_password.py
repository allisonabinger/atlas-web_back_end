#!/usr/bin/env python3
"""Task 5: Encrypting Passwords using bcrypt"""
import bcrypt


def hash_password(password):
    """generates  a salt and hashes the password"""
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password
