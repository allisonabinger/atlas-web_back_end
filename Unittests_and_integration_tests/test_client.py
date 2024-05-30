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

    @patch('client.GithubOrgClient.org', new_callable=property)
    def test_public_repos_url(self, mock_org):
        """Test the _public_repos_url property of GithubOrgClient"""
        # Define a known payload
        known_payload = {"repos_url": "https://api.github.com/orgs/mock_org/repos"}
        
        # Set the return value of the mocked org property
        mock_org.side_effect = [known_payload]
        
        # Create an instance of GithubOrgClient
        client = GithubOrgClient("mock_org")
        
        # Test that the _public_repos_url property returns the expected URL
        self.assertEqual(client._public_repos_url, "https://api.github.com/orgs/mock_org/repos")
