#!/usr/bin/env python3
"""Task 0: Regexing"""

import re
from typing import List
import logging
import mysql.connector
import os


PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def filter_datum(
        fields: List[str], redaction: str,
        message: str, separator: str) -> str:
    """Replaces occurrences of certain field values to return
    an obfuscated log message.

    uses regex string to reformat the message by replacing the
    field with the redaction.

    arguments:
        fields: list of strings of all fields to obfuscate
        reducation: string representing the obfuscated field
        message: string representating log line
        separator: string (character) by which the field is separated by
            in the message
    """

    for field in fields:
        message = re.sub(rf"(?<={field}=)[^{separator}]+", redaction, message)
    return message


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """initialization, accepts list of strings as fields"""
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """formats the specific log records"""
        message = super().format(record)
        return filter_datum(self.fields, self.REDACTION,
                            message, self.SEPARATOR)


def get_logger() -> logging.Logger:
    """returns logger named 'user_data'
    logger only logs up to INFO level and does not propagate messages"""

    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    handler = logging.StreamHandler()
    formatter = RedactingFormatter(fields=PII_FIELDS)
    handler.setFormatter(formatter)
    logging.addHandler(handler)

    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """connects securely to the DB and returns a MySQLConnection object"""

    """obtains db creds from the env variables"""
    PERSONAL_DATA_DB_USERNAME = os.environ.get(
        "PERSONAL_DATA_DB_USERNAME", "root")

    PERSONAL_DATA_DB_PASSWORD = os.environ.get(
        "PERSONAL_DATA_DB_PASSWORD", "")

    PERSONAL_DATA_DB_HOST = os.environ.get(
        "PERSONAL_DATA_DB_HOST", "localhost")

    PERSONAL_DATA_DB_NAME = os.environ.get(
        "PERSONAL_DATA_DB_NAME", "")

    db = mysql.connector.connect(
        user=PERSONAL_DATA_DB_USERNAME,
        password=PERSONAL_DATA_DB_PASSWORD,
        host=PERSONAL_DATA_DB_HOST,
        database=PERSONAL_DATA_DB_NAME
    )
    return db
