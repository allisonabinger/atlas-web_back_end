#!/usr/bin/env python3
"""Basic Auth: Inherits from Auth in auth.py"""
from typing import Tuple
from typing import TypeVar
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
            return None,

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
            return None, None
        if not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None

        user_email, user_pass = decoded_base64_authorization_header.split(':', 1)  # noqa
        return user_email, user_pass

    def user_object_from_credentials(
            self, user_email: str, user_pwd: str) -> TypeVar('User'):
        """returns the User instance based on their email and password"""
        if user_email is None or not isinstance(user_email, str):

            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None

        user_list = User.search({'email': user_email})

        if not user_list:
            return None

        user = user_list[0]
        if not user:
            return None

        if not user.is_valid_password(user_pwd):
            return None

        return user

    def current_user(self, request=None) -> TypeVar('User'):
        """Overloads Auth and retrieves the User instance for a request"""

        if request is None:
            from flask import request

        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return None

        base64_auth_header = self.extract_base64_authorization_header(auth_header)  # noqa
        if not base64_auth_header:
            return None

        decoded_auth_header = self.decode_base64_authorization_header(base64_auth_header)  # noqa
        if not decoded_auth_header:
            return None

        user_email, user_pass = self.extract_user_credentials(decoded_auth_header)  # noqa
        if not user_email or not user_pass:
            return None

        return self.user_object_from_credentials(user_email, user_pass)
