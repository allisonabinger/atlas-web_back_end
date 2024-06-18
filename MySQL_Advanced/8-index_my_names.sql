-- holberton database must be created and prepared before this script can run.
-- uses names.sql
-- no longer in directory, but use this link while logged into the intranet to download.
-- https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/632/names.sql.zip

-- Task 8: creates an index 'idx_name_first' on the table 'names' and the first letter of 'name'
CREATE INDEX idx_name_first ON names (name(1));
