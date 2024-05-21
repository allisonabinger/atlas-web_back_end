#!/usr/bin/env python3
"""Task 0: Regexing"""

import re
from typing import List
import logging


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
    FORMAT = "[ATLAS] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
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
