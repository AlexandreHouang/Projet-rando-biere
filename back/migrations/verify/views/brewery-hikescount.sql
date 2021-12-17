-- Verify rando-biere:views/brewery-hikescount on pg

BEGIN;

SELECT * FROM brewery_with_hikescount
WHERE region = 'Auvergne-Rhône-Alpes';

ROLLBACK;
