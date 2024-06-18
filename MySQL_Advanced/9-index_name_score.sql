-- holberton database must be created and prepared before this script can run.
-- uses names.sql

-- Task 9: creates an index idx_name_first_score on the table names,
-- and the first letter of name and the score

CREATE INDEX idx_name_first_score ON names (name(1), score);
