-- Deploy rando-biere:init to pg

BEGIN;

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nickname text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "role" text NOT NULL 
);

CREATE TABLE brewery (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    main_img text NOT NULL DEFAULT 'logo-brewery',
    "description" text NOT NULL,
    region text NOT NULL,
    slug text NOT NULL,
    adress text NOT NULL UNIQUE,
    email text,
    phone_number int,
    "user_id" int NOT NULL REFERENCES "user"(id)
);


CREATE TABLE beer (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "description" text,
    image_url text NOT NULL,
    abv decimal NOT NULL,
    "type" text NOT NULL,
    brewery_id int NOT NULL REFERENCES brewery(id) ON DELETE CASCADE
);

CREATE TABLE hike (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    main_img text NOT NULL DEFAULT 'logo-hike',
    "description" text NOT NULL,
    gpx_url text,
    map_url text,
    difficulty text NOT NULL,
    "time" text NOT NULL,
    distance int,
    max_altitude int,
    min_altitude int,
    brewery_id int NOT NULL REFERENCES brewery(id) ON DELETE CASCADE
);

CREATE TABLE brewery_photo (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "url" text NOT NULL,
    caption text NOT NULL,
    alternative_text text NOT NULL,
    brewery_id int NOT NULL REFERENCES brewery(id) ON DELETE CASCADE

);

CREATE TABLE hike_photo (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "url" text NOT NULL,
    caption text NOT NULL,
    alternative_text text NOT NULL,
    hike_id int NOT NULL REFERENCES hike(id) ON DELETE CASCADE

);

COMMIT;