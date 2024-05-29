#!/usr/bin/env python3
"""Test file for utils.py"""
import unittest
from unittest.mock import patch, Mock
from parameterized import parameterized
from typing import Dict, Any, Tuple
from utils import access_nested_map, get_json, memoize


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
        """asserts that the parameters will give the expected results"""
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b")),
    ])
    def test_access_nested_map_exception(self,
                                         nested_map: Dict[str, Any],
                                         path: Tuple[str, ...]) -> None:
        """method to assert the that the exception will be raised"""
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


class TestMemoize(unittest.TestCase):
    """Test Suite for memoize method
    decorator used to cache result of a method call.
    tests to make sure the method is only called once no matter
    how many times it is accessed."""

    def test_memoize(self):
        """tests functionality of memoize with a method. contains the
        TestClass class to utilize"""
        class TestClass:
            """defines testClass which holds two methods."""
            def a_method(self):
                """returns 42 as an int
                """
                return 42

            @memoize
            def a_property(self):
                """uses memoizeation to cache the result of a_method.
                """
                return self.a_method()

        """creates an instance of the class"""
        test_instance = TestClass()

        with patch.object(TestClass, 'a_method', return_value=42) as mock_method:  # noqa
            """accesses the mock object"""
            result1 = test_instance.a_property
            result2 = test_instance.a_property
            """asserts the property will return the same value"""
            self.assertEqual(result1, 42)
            self.assertEqual(result2, 42)
            """asserts the mock_method was only called once"""
            mock_method.assert_called_once()
