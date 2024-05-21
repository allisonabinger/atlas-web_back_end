  <h1 align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1287/1287023.png" align="left" width="50">
   Personal Data
  <img src="https://cdn-icons-png.flaticon.com/512/1287/1287023.png" align="right" width="50"></h1>


## Intro

## Learning Objectives

1. **Personal Identifiable Information**

2. **How to implement a log filter that will obfuscate PII fields**

3. **How to encrypt a password and check the validity of an input password**

4. **How to authenticate to a database using environment variables**

---
---
&nbsp;
&nbsp;
&nbsp;

# Concepts:

[**Regex-ing**](https://www.w3schools.com/python/python_regex.asp)
Utilizing regular expressions for pattern matching and filtering within log messages.

[**Obfuscation**](https://en.wikipedia.org/wiki/Obfuscation_(software))
Creating source or machine code that is difficult for humans or computers to understand, which in this context is for concealing. See [**Security through Obscurity**](https://en.wikipedia.org/wiki/Security_through_obscurity)


## Resources and Descriptions
[**What is PII, non-PII, and Personal Data?**](https://piwik.pro/blog/what-is-pii-personal-data/)

[**Logging facility for Python**](https://docs.python.org/3/library/logging.html)

[**bcrypt Packag - Password Hashing**](https://github.com/pyca/bcrypt/)


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
