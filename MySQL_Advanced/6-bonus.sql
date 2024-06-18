-- holberton database must be created and prepared before this script can run.
-- uses 6-init.sql and 6-main.sql

-- Task 6: creates a stored procedure AddBonus that adds a new correction for a student
-- Procedure takes 3 inputs:
    -- user_id, a users.id value (assume user_id is linked to an existing 'users')
    -- project_name, a new or already exists projects
        -- if not projects.name found in the table, it should be created
    -- score, the score value for the correction

-- A stored procedure is a collection of statements stored and can be executed on demand, allowing for complex
-- SQL logic encapsulation into a single unit to be reused and called from various parts of the app

DROP PROCEDURE IF EXISTS AddBonus;
DELIMITER //

CREATE PROCEDURE AddBonus(
    IN user_id INT,
    IN project_name VARCHAR(255),
    IN score INT
)
BEGIN
    DECLARE project_id INT;

    SELECT id INTO project_id FROM projects WHERE name = project_name;

    IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SET project_id = LAST_INSERT_ID();
    END IF;

    INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, score);
END //

DELIMITER ;
