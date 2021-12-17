
-- Deploy rando-biere:views/brewery-hikescount to pg

BEGIN;

CREATE VIEW brewery_with_hikescount AS
SELECT brewery.id, brewery.name, brewery.main_img, brewery.description, region, slug, adress, email, phone_number, user_id, count(hike.id) hikes_number FROM brewery
LEFT JOIN hike ON brewery_id = brewery.id
GROUP BY brewery.id
ORDER BY brewery.id;

COMMIT;
