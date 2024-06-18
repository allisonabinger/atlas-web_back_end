-- Task 1: Creates a table 'users' with the following attributes:
-- id (int, never null, auto increment and primary key)
-- email (string [255 characters], never null, unique)
-- name (string [255 characters])
-- country (enumeration of countries: US, CO, TN, never null, (= will be first element of enumeration)
--
-- Tip! An enumeration (ENUM) is a special data type that allows you to define
-- a var to be one of a predefined set of values.

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    country ENUM('US', 'CO', 'TN') NOT NULL DEFAULT 'US'
)
