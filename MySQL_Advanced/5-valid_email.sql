-- holberton database must be created and prepared before this script can run.
-- uses 5-init.sql and 5-main.sql

-- Task 5: creates a trigger that resets the attribute valid_email only when the email has been changed
-- valid_email is a boolean with a default val of 0

DELIMITER //

CREATE TRIGGER reset_valid_email
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    IF NEW.email != OLD.email THEN
        set NEW.valid_email = 0;
    END IF;
END;
//

DELIMITER ;
