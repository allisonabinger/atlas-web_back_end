#!/usr/bin/env python3
"""Session Auth: Inherits from Auth in auth.py"""
from typing import Tuple
from typing import TypeVar
from api.v1.auth.auth import Auth
from models.user import User
import base64
import uuid


class SessionAuth(Auth):
    """Class is empty: first step for creating new authentication mechanism"""
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """Creates a session and returns the user_id"""
        if user_id is None:
            return None
        if not isinstance(user_id, str):
            return None

        session_id = str(uuid.uuid4())
        self.user_id_by_session_id[session_id] = user_id

        return session_id
