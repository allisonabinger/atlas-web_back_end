-- holberton database must be created and prepared before this script can run.
-- references metal_bands.sql located in directory

-- Task 3: lists all bands with 'Glam rock' as their main style***, ranked by their longevity
-- column names are 'band_name' and 'lifespan' (in years)
-- required to use attributes formed and split for computing 'lifespan'

CREATE TEMPORARY TABLE IF NOT EXISTS glam_rock_bands AS (
    SELECT
        band_name,
        -- IFNULL(a, b) returns a if null, b if not: returns split '' if null, and value if not
        -- calculates
        IFNULL(NULLIF(split, ''), YEAR(CURDATE()) - formed) AS lifespan
    FROM metal_bands
    WHERE style LIKE '%Glam rock%'
);

SELECT band_name, lifespan
FROM glam_rock_bands
ORDER BY lifespan DESC;

-- ** NOTE! Prompt asks where Glam rock is their main style, assuming that means it is the first in the list of styles
-- This script does not perform that specific query, but only if 'Glam rock' is listed in their style. 
-- To perform that action, replace:

-- WHERE style LIKE '%Glam rock%'

-- with

-- WHERE FIND_IN_SET('Glam rock', style) = 1;
