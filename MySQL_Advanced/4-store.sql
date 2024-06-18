-- holberton database must be created and prepared before this script can run.
-- uses 4-main.sql and 4-init.sql

-- Task 4: Creates a trigger that decreases the quantity of an item after adding a new order
-- Quantity in the table 'items' can be negative

DELIMITER //

CREATE TRIGGER update_inventory
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    -- decreases the quantity in items TABLE
    UPDATE items
    SET quantity = quantity - NEW.number
    WHERE name = NEW.item_name;
END;
//

DELIMITER ;
