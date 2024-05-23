#!/usr/bin/env python3
"""Session Auth: Inherits from Auth in auth.py"""
from typing import Tuple
from typing import TypeVar
from api.v1.auth.auth import Auth
from models.user import User
import base64


class SessionAuth(Auth):
    """Class is empty: first step for creating new authentication mechanism"""
