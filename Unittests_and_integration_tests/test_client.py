#!/usr/bin/env python3
"""Test file for client.py"""
import unittest
from client import GithubOrgClient
from parameterized import parameterized
from unittest.mock import patch


class TestGithubOrgClient(unittest.TestCase):
    """Test Suite for GithubOrgClient"""

    @parameterized.expand([
        ("google", {"repos_url": "https://api.github.com/orgs/google/repos"}),
        ("abc", {"repos_url": "https://api.github.com/orgs/abc/repos"})
    ])
    @patch('client.get_json')
    def test_org(self, org_name, expected_org, mock_get_json):
        """Uses mock to test if GithubOrgClient returns the correct value"""

        """sets return value of the mocked get_json"""
        mock_get_json.return_value = expected_org

        """creates instance"""
        client = GithubOrgClient(org_name)

        """calls the org method, but wont use get_json"""
        result = client.org

        expected_url = "https://" + "api.github.com/orgs/" + org_name

        """ensures get_json was called once with url"""
        mock_get_json.assert_called_once_with(expected_url)  # noqa

        """asserts the result matches the expected org"""
        self.assertEqual(result, expected_org)
