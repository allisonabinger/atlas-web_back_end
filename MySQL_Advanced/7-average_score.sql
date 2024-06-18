-- holberton database must be created and prepared before this script can run.
-- uses 7-init.sql and 7-main.sql

-- Task 7: creates a stored procedure ComputeAverageScoreForUser that computers and stores the
-- average score for a student. an average score can be a decimal
-- Procedure takes 1 input:
    -- user_id, a users.id value (assume user_id is linked to an existing 'users')

DROP PROCEDURE IF EXISTS ComputeAverageScoreForUser;

DELIMITER //

CREATE PROCEDURE ComputeAverageScoreForUser(
    IN p_user_id INT
)
BEGIN
    DECLARE new_avg_score DECIMAL(10, 2);

    SELECT AVG(score) INTO new_avg_score
    FROM corrections
    WHERE user_id = p_user_id;

    UPDATE users
    SET average_score = new_avg_score
    WHERE id = p_user_id;

END //
DELIMITER ;
