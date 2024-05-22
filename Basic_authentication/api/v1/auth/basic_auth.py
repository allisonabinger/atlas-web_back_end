#!/usr/bin/env python3
"""Basic Auth: Inherits from Auth in auth.py"""
from typing import Tuple, TypeVar
from api.v1.auth.auth import Auth
from models.user import User


class BasicAuth(Auth):
    """empty class"""
