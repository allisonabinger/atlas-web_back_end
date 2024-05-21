#!/usr/bin/env python3
"""Auth Class for Authorization"""
from flask import request
from typing import List


class Auth():
    """base class for authentication system - template for later"""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """returns false
        path and excluded_paths will be used later"""
        return False
    
    def authorization_header(self, request=None) -> str:
        """returns None
        request will be the Flask Request object"""
        return None
    
    def current_user(self, request=None) -> TypeVar('User'):
        """returns None
        request will be the Flask Request object"""
    
    
