  <h1 align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1287/1287023.png" align="left" width="50">
   Unittests and Integration Tests
  <img src="https://cdn-icons-png.flaticon.com/512/1287/1287023.png" align="right" width="50"></h1>


## Intro

## Learning Objectives

1. **Unit and Integration Tests**

2. **Using `Mock()` and `patch`**

3. **Parameterized in Testing**

4. **Memoization**

---
---
&nbsp;
&nbsp;
&nbsp;

# Concepts:

[**UnitTest**](https://docs.python.org/3/library/unittest.html)
Unit Testing Framework - supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework. 

[**Mock Object Library*](https://docs.python.org/3/library/unittest.mock.html)
Using `unittest.mock` to replace parts of your system under test with mock objects, and to make assertions about how they have been used. Additionally, `patch()` acts a function decorator, class decorator, or a context manager. Inside the body of the function or `with` statement, the target is patched with a new object.


## Resources and Descriptions
[Resource]()
[Resource]()

&nbsp;
---
&nbsp;

# Code Examples and Highlighted Tasks

## Filtered Logger
[**filtered_logger.py**](filtered_logger.py)

The functionality of this file is to demonstrate secure logging practices in Python, including regex-based obfuscation or sensitive data fields in log messages and secure connection to a MySQL database.

### Concepts Used
**Regex-ing**
The project utilizes regular expressions (re module) for pattern matching and filtering within log messages to obfuscate sensitive information such as names, emails, phone numbers, SSNs, and passwords.

**Obfuscating Log Messages**
The filter_datum function is used to replace occurrences of specified field values with a redaction string in log messages, ensuring sensitive data is not exposed.

**Logging Facility in Python**
Python's logging module is employed to create a custom RedactingFormatter class, which formats log records and integrates the filter_datum function to obfuscate sensitive data fields before logging.

**bcrypt Package**
While not explicitly demonstrated in this script, bcrypt is commonly used for secure password hashing and authentication purposes in Python applications.

**Connecting to a Secure Database**
The project securely connects to a MySQL database using mysql.connector, retrieving credentials from environment variables (PERSONAL_DATA_DB_USERNAME, PERSONAL_DATA_DB_PASSWORD, PERSONAL_DATA_DB_HOST, PERSONAL_DATA_DB_NAME) to ensure secure database access.



&nbsp;
---
&nbsp;

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
