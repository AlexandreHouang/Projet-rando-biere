INSERT INTO brewery ("name", main_img, "description", region, slug, adress, email, phone_number, "user_id") VALUES
('Brasserie des Ducs', 'brewery1', 'Une brasserie fun pour les gens de la haute.', 'Auvergne-Rhône-Alpes', 'brasserie-des-ducs', '12 rue des Douze, 69650 Blabla', 'brasserie-des-ducs@lala.com', '0612121212', 1),
('Brasserie Elixkir', 'brewery2', 'Une brasserie qui vous promet la vie éternelle.', 'Grand Est', 'brasserie-elixkir', '166 chemin du Houblon, 67272 Tutu-les-Champs', 'brasserie_elixkir@lehoubloncebon.fr', '0647474747', 1),
('Brasserie du Pingouin', 'brewery3', 'Ici, on paie avec des cailloux. Un galet = une pinte !', 'Bourgogne-Franche-Comté', 'brasserie-du-pingouin', '14 chemin de la Banquise, 71100 Châlon-sur-Saône', 'pinguin_corps@brasserie.fr', '0347474723', 1),
('Les Trois Balais', 'brewery4', 'Le point de rendez-vous des sorciers branchés.', 'Occitanie', 'les-trois-balais', '4 chemin biscornu, 34830 Jacou', 'trois-balais@jacou.fr', '0426474517', 1),
('La penultième', 'brewery5', 'Presque la dernière brasserie avant la fin du monde', 'Auvergne-Rhône-Alpes', 'la-penultième', '15 rue de la fin, 42100 Rochetaillée', 'la-penultième@lala.fr', '0472589788', 1),
('Brasserie Finale', 'brewery6', 'La vraie dernière brasserie avant la fin du monde.', 'Auvergne-Rhône-Alpes', 'brasserie-final', '1 rue de la fin, 42100 Rochetaillée', 'brasserie-finale@lala.fr', '0447584767', 1),
('Brasserie de la Vachette', 'brewery7', 'Boire un coup avec une vache ? Check !', 'Normandie', 'brasserie-de-la-vachette', '69 rue du flocon, 61150 Avoine', 'brasserie-de-la-vachette@piou.fr', '0247584767', 1);

--INSERT INTO beer ("name", "description", image_url, abv, "type", brewery_id) VALUES

INSERT INTO hike ("name", main_img, "description", gpx_url, map_url, difficulty, "time", distance, max_altitude, min_altitude, brewery_id) VALUES
('Le petit chemin', 'hike1', 'Un joli petit chemin qui sent la noisette.', 'gpxurl', 'mapurl', 'alpiniste', '3h', 22, 1200, 25, 2),
('Le grand chemin', 'hike2', 'Un long chemin bordé de sapins.', 'gpxurl', 'mapurl', 'débutant', '1h30', 15, 1000, 350, 1),
('Le mini chemin','hike3', 'Un joli mini chemin qui ne sent pas la noisette.', 'gpxurl', 'mapurl', 'alpiniste', '3h', 14, 1200, 25, 2),
('Le chemin', 'hike4', 'Ici LE chemin.', 'gpxurl', 'mapurl', 'alpiniste', '3h',36, 1200, 25, 2);

INSERT INTO brewery_photo ("url", caption, alternative_text, brewery_id) VALUES
('photoBrasserie1', 'La photo numéro uno', 'Une photo de la première brasserie', 1),
('photoBrasserie2', 'La photo numéro dos', 'Une autre photo de la première brasserie', 1),
('photoBrasserie3', 'La photo numéro tres', 'Une photo de la deuxième brasserie super chouette', 2),
('photoBrasserie4', 'La photo numéro quatro', 'Une troisième photo de la première brasserie', 1),
('photoBrasserie5', 'La photo numéro cinco', 'Une photo de la deuxième brasserie', 2);

INSERT INTO hike_photo ("url", caption, alternative_text, hike_id) VALUES
('photoRandonnee1', 'La photo numéro uno', 'Une photo de la première randonnée lambda', 1),
('photoRandonnee2', 'La photo numéro dos', 'Une photo de  première randonnée magnifique', 1),
('photoRandonnee3', 'La photo numéro tres', 'Une photo de la deuxième randonnée', 2),
('photoRandonnee4', 'La photo numéro quatro', 'Une photo de la première randonnée pleine de vie', 1),
('photoRandonnee5', 'La photo numéro cinco', 'Une photo de la deuxième randonnée haute en couleur', 2);