#!/usr/bin/env python3
"""Test file for utils.py"""
import unittest
from parameterized import parameterized
from typing import Dict, Any, Tuple
from utils import access_nested_map


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
