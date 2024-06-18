-- Task 0: Creates a table 'users' with the following attributes:
-- id (int, never null, auto increment and primary key)
-- email (string [255 characters], never null, unique)
-- name (string [255 characters])

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255)
)
