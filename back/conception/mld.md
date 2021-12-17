USER (id, nickname, mail,  password, role)

BREWERY(id, name, main_img, logo, description, region, slug, address, email, phone_number, #user_id)

BEER (id, name, description, image_url, abv, type, #brewery_id)

HIKE(id, name, description, main_img, gpx, map, difficulty, time, distance, max_altitude, min_altitude, #brewery_id)

BREWERY_PHOTO(id, caption, alternative_text, url, #brewery_id)

HIKE_PHOTO(id, caption, alternative_text, ur, #hike_id)

