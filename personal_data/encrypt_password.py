#!/usr/bin/env python3
"""Task 5: Encrypting Passwords using bcrypt"""
import bcrypt


def hash_password(password: str) -> bytes:
    """generates  a salt and hashes the password"""
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password


def is_valid(hashed_password: bytes, password: str) -> bool:
    """validates if the provided password matches the hashed_password
    using bcrypt's checkpw"""
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
