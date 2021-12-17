-- Revert rando-biere:init from pg

BEGIN;

DROP TABLE hike_photo, brewery_photo, hike, beer, brewery, "user"; 

COMMIT;
