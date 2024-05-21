#!/usr/bin/env python3
"""
Authorization Class Template
"""

from flask import request
from typing import List, TypeVar


class Auth():
    """base class for authentication system - template for later"""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """returns false if authentication is not required for given path
        i.e. if path is in excluded_paths.

        returns true if path requires authentication
        i.e. if path is NOT in excluded_paths"""
        if path is None:
            return True
        if excluded_paths is None or not excluded_paths:
            return True

        """normalize path by ensuring it ends with /"""
        normalized_path = path if path.endswith('/') else path + '/'

        """check if normalized path is in the excluded paths"""
        for ex_path in excluded_paths:
            if ex_path.endswith('/'):
                normalized_excluded_path = ex_path
            else:
                normalized_excluded_path = ex_path + '/'

            if normalized_path == normalized_excluded_path:
                return False

        return True

    def authorization_header(self, request=None) -> str:
        """returns None
        request will be the Flask Request object"""
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """returns None
        request will be the Flask Request object"""
