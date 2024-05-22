#!/usr/bin/env python3
"""Basic Auth: Inherits from Auth in auth.py"""
from typing import Tuple, TypeVar
from api.v1.auth.auth import Auth
from models.user import User
import base64


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

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """returns the decoded value of a Base64 string"""

        if base64_authorization_header is None:
            return None

        if not base64_authorization_header:
            return None

        if not isinstance(base64_authorization_header, str):
            return None

        try:
            decoded_bytes = base64.b64decode(base64_authorization_header)
            decoded_string = decoded_bytes.decode('utf-8')
            return decoded_string
        except (base64.binascii.Error, UnicodeDecodeError):
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> (str, str):
        """returns the user email and password from the Base64 decoded value"""
        if decoded_base64_authorization_header is None:
            return None
        if not isinstance(decoded_base64_authorization_header, str):
            return None
        if ':' not in decoded_base64_authorization_header:
            return None

        user_email, user_pass = decoded_base64_authorization_header.split(':', 1)  # noqa
        return user_email, user_pass
