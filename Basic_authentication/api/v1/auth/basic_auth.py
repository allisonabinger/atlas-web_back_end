#!/usr/bin/env python3
"""Basic Auth: Inherits from Auth in auth.py"""
from typing import Tuple, TypeVar
from api.v1.auth.auth import Auth
from models.user import User
# import base64 UNUSED


class BasicAuth(Auth):
    """basic auth class implementation"""
    def extract_base64_authorization_header(
            self, authorization_header: str) -> str:
        """extracts the base64 auth header

        returns the Base64 encoded part of auth header,
        or None if header input is invalid"""

        if not isinstance(authorization_header, str):
            return None
        if authorization_header is None:
            return None
        if not authorization_header.startswith("Basic "):
            return None

        return authorization_header.split(' ')[1]
