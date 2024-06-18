-- holberton database must be created and prepared before this script can run.
-- uses 10-init.sql

-- Task 10: SafeDiv (function) divides and returns the first by the second number or returns 0
-- if second number is 0

-- Function takes a (float) and b (float) as arguments, and returns a / b or 0 if b == 0
-- Task initially states a and b are ints, but example shows float values, so a and b are declared as floats

DROP FUNCTION IF EXISTS SafeDiv;

DELIMITER //
CREATE FUNCTION SafeDiv(a FLOAT, b FLOAT)
RETURNS FLOAT

-- deterministic keywork prevents error 1418, means same result produced
-- by the same inputs. Does not read or modify data outside of its parameters,
-- and does not depend on non-deterministic factors like time or system vars
DETERMINISTIC
BEGIN
    DECLARE res FLOAT;

    IF b = 0 THEN
        set res = 0;
    ELSE
        set res = a / b;
    END IF;

    RETURN res;
END //

DELIMITER ;
