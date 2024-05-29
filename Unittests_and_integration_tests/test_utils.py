#!/usr/bin/env python3
"""Test file for utils.py"""
import unittest
from unittest.mock import patch, Mock
from parameterized import parameterized
from typing import Dict, Any, Tuple
from utils import access_nested_map, get_json


class TestAccessNestedMap(unittest.TestCase):
    """Test suite for access_nested_map, designed to access values within
    a map using a sequence of keys"""

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),  # Test case 1
        ({"a": {"b": 2}}, ("a",), {"b": 2}),  # Test Case 2
        ({"a": {"b": 2}}, ("a", "b"), 2),  # Test Case 3
    ])
    def test_access_nested_map(self,
                               nested_map: Dict[str, Any],
                               path: Tuple[str, ...],
                               expected: Any) -> None:
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b")),
    ])
    def test_access_nested_map_exception(self,
                                         nested_map: Dict[str, Any],
                                         path: Tuple[str, ...]) -> None:
        with self.assertRaises(KeyError):
            access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """Test suite for get_json method"""

    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False}),
        ])
    def test_get_json(self, test_url: str, test_payload: Dict) -> None:
        """Tests the functionality of get_json method using Mock
        to isolate from any external dependencies (like network issues)"""
        # replaces requests.get with mock object mocked_get instead
        with patch('requests.get') as mocked_get:
            mock_response = Mock()  # creates a new Mock object

            # sets the return value of the json method to return test_payload
            mock_response.json.return_value = test_payload
            # should return mock_response when mocked_get is called
            # mocked_get is the replacement for requests.get
            mocked_get.return_value = mock_response
            # calls get_json
            result = get_json(test_url)
            # makes sure get_json used the mocked_get instead of requests.get
            mocked_get.assert_called_once_with(test_url)
            # makes sure the result was called and is the same as test_payload
            self.assertEqual(result, test_payload)
