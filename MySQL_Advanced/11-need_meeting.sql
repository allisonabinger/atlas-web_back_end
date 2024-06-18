-- holberton database must be created and prepared before this script can run.
-- uses 11-init.sql and 11-main.sql

-- Task 11: Creates a view 'need_meeting' that lists all students that:
    -- have a score under 80 (strict)
    -- AND
    -- no last_meeting date OR date is more than a month

DROP VIEW IF EXISTS need_meeting;

CREATE VIEW need_meeting AS
SELECT name FROM students
WHERE score < 80 AND last_meeting IS NULL OR last_meeting < DATE_SUB(CURDATE(), INTERVAL 30 DAY);
