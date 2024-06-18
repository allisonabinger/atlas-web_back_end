-- holberton database must be created and prepared before this script can run.
-- references metal_bands.sql located in directory

-- Task 2: Ranks country origins of bands, ordered by the number of (non-unique) fans
-- column names are origin and nb_fans

-- Tip! Uses a temporary table to only exist for the duration of the session in which theyre created.
-- Improves performance since temp. tables are typically faster than recalculating the same result.
-- This script will not store this table as a permanent object, but will select from the temporary table.

CREATE TEMPORARY TABLE IF NOT EXISTS band_fans AS (
    SELECT origin, SUM(fans) AS nb_fans FROM metal_bands
    GROUP BY origin
    ORDER BY nb_fans DESC
);

SELECT origin, nb_fans FROM band_fans;
