-- holberton database must be created and prepared before this script can run.
-- uses names.sql

-- Task 8: creates an index 'idx_name_first' on the table 'names' and the first letter of 'name'
CREATE INDEX idx_name_first ON names (name(1));
