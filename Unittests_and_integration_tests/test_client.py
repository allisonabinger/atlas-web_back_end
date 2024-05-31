#!/usr/bin/env python3
"""Test file for client.py"""
import unittest
from client import GithubOrgClient
from parameterized import parameterized
from unittest.mock import patch, PropertyMock


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

    @patch('client.GithubOrgClient.org', new_callable=PropertyMock)
    def test_public_repos_url(self, mock_org):
        """Test the _public_repos_url property of GithubOrgClient
        based on the mocked org"""

        mock_payload = {"repos_url": "https://api.github.com/orgs/google/repos"}  # noqa
        mock_org.return_value = mock_payload

        client = GithubOrgClient("CompTIA")
        result = client._public_repos_url
        self.assertEqual(result, mock_payload["repos_url"])

    @patch('client.get_json')
    def test_public_repos(self, mock_get_json):
        """Method to test the public_repos property of GithubOrgClient"""

        """list of dictionaries for mock object return value"""
        repos_payload = [
            {"name": "repo1"},
            {"name": "repo2"},
            {"name": "repo3"}
        ]
        """defines mock object return value to replace get_json's return"""
        mock_get_json.return_value = repos_payload

        """uses patch as context manager to patch _public_repos_url property
        uses MockPropert to assign it to mock_public_repos_url"""
        with patch('client.GithubOrgClient._public_repos_url', new_callable=PropertyMock) as mock_public_repos_url:  # noqa
            mock_url = "https://api.github.com/orgs/google/repos"

            """assigns property to mock_url for mock property"""
            mock_public_repos_url.return_value = mock_url

            client = GithubOrgClient("CompTIA")
            result = client.public_repos()

            self.assertEqual(result, ["repo1", "repo2", "repo3"])
            mock_public_repos_url.assert_called_once()
            mock_get_json.assert_called_once_with(mock_url)

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False),
    ])
    def test_has_license(self, repo, license_key, expected):
        """Method to test the has_license method of GithubOrgClient
        arguments passed from expanded parameters:
        repo: dictionary for repo license
        license_key : key
        expected: bool result of has_license depending on parameter"""

        client = GithubOrgClient("CompTIA")
        result = client.has_license(repo, license_key)
        self.assertEqual(result, expected)

#  ######################### Start of Integration Test
