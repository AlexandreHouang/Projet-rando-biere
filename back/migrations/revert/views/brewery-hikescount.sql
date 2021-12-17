-- Revert rando-biere:views/brewery-hikescount from pg

BEGIN;

DROP VIEW brewery_with_hikescount;

COMMIT;
