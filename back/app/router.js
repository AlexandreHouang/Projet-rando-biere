const { Router } = require("express");
const breweryController = require("./controllers/breweryController");
const hikeController = require("./controllers/hikeController");
const authService = require("./services/auth");
const jwtSecurity = require("./services/security");
const { cache, flush } = require("./services/cache");
const brewerySchema = require("./schemas/brewery");
const { validateBody } = require("./services/validator");
const router = Router();

/**
 * Returns all breweries from the database with or without filter on region if searched
 * @route GET /breweries
 * @group Breweries
 * @param {string} region.query - region
 * @returns {Array<Brewery>} 200 - An array of breweries
 */
router.get("/breweries", cache(10), breweryController.getAllBreweries);

/**
 * Returns a brewery from the database from its id with its hikes and photos
 * @route GET /brewery/{id}
 * @group Brewery
 * @param { number } id.path.required- the brewery id
 * @returns {Brewery.model} 200 - An object containing a brewery with its hikes and photos
 */
router.get(
    "/brewery/:id(\\d+)",
    cache(10),
    breweryController.getBreweryWithHikes
);

/**
 * Returns a hike from the database from its id with its photos and its related brewery
 * @route GET /hike/{id}
 * @group Hike
 * @param { number } id.path.required- the hike id
 * @returns { Hike.model } 200 - An object containing a hike with its hikes and photos
 * @returns 404 - no hike with this id
 */
router.get("/hike/:id(\\d+)", cache(10), hikeController.getAHikeWithDetails);

/**
 * Insert a brewery into the Database and returs it in json format
 * @route POST /brewery
 * @group Brewery
 * @param {Brewery.model} brewery.body.required - the new brewery
 * @returns {Brewery.model} 200 - An object containing a brewery
 * @returns 500 Insert failed
 */
router.post(
    "/brewery",
    jwtSecurity.checkJWT,
    validateBody(brewerySchema),
    flush,
    breweryController.createOneBrewery
);

/**
 * Update a brewery into the Database and returs it in json format
 * @route PATCH /brewery/{id}
 * @group Brewery
 * @param {Brewery.model} brewery.body.required - the brewery to patch
 * @param {number} id.path.required - the brewery id
 * @returns {Brewery.model} 200 - An object containing a brewery
 * @returns 404 - no brewery with this id
 * @returns 500 - update failed
 */
router.patch(
    "/brewery/:id(\\d+)",
    jwtSecurity.checkJWT,
    validateBody(brewerySchema),
    flush,
    breweryController.updateOneBrewery
);

/**
 * Delete a brewery from the Database
 * @route DELETE /brewery/{id}
 * @group Brewery
 * @param { number } id.path.required- the brewery id
 * @returns 200 - delete completed
 * @returns 404 - no brewery with this id
 */
router.delete(
    "/brewery/:id(\\d+)",
    jwtSecurity.checkJWT,
    flush,
    breweryController.deleteOneBrewery
);

// checks if a user in DB matches the login infos, send back a token in the headers
router.post("/login", authService.auth);

// if no route matches the request
router.use((req, res) => res.status(404).json("endpoint not found"));

module.exports = router;
