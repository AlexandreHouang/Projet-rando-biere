const Brewery = require("../models/brewery");
const Hike = require("../models/hike");
const Photo = require("../models/photo");

const breweryController = {
    /**
     * Fetches every brewery in the database or every brewery from one region if search
     * @returns {Array<Breweries>}
     * @async
     * @static
     */
    getAllBreweries: async (req, res) => {
        //Checks if there is a region specified in the query
        if (req.query.region) {
            const theBreweries = await Brewery.findAllByRegion(
                req.query.region
            );
            res.json(theBreweries);
            // if not, displays all breweries
        } else {
            const theBreweries = await Brewery.findAll();
            res.json(theBreweries);
        }
    },

    /**
     * fetches one brewery with its associated photos, hikes (and their photos)
     * @return  {Object<Brewery>}
     * @async
     * @static
     */
    getBreweryWithHikes: async (req, res) => {
        const { id } = req.params;

        // fetches the brewery by its id
        const theBrewery = await Brewery.findOneByPk(id);

        // check if it exits
        if (!theBrewery) {
            res.status(404).send("No brewery with this id");
        } else {
            theBrewery.photos = [];
            theBrewery.hikes = [];

            // fetches all photos related to the brewery
            const breweryPhotos = await Photo.findAllByBreweryId(id);
            for (const photo of breweryPhotos) {
                theBrewery.photos.push(photo);
            }

            // fetches all the hikes related
            const theHikes = await Hike.findAllByBreweryId(id);
            for (const hike of theHikes) {
                hike.photos = [];

                // fetches all photos related to one hike
                const hikePhotos = await Photo.findAllByHikeId(hike.id);
                for (const photo of hikePhotos) {
                    hike.photos.push(photo);
                }
                theBrewery.hikes.push(hike);
            }

            res.json(theBrewery);
        }
    },

    /**
     * Inserts a new brewery in the brewery table
     * @returns {Object<Brewery>}
     * @async
     */
    createOneBrewery: async (req, res) => {
        //creates an instance of brewery with datas from the body
        const newBrewery = new Brewery(req.body);
        try {
            //try to insert it into the DB  and returns the json of the new brewery
            await newBrewery.save();
            res.status(201).json(newBrewery);
        } catch (err) {
            //if the insert fails returns the error message.
            res.status(500).json(err.message);
        }
    },

    /**
     * Inserts a new brewery in the brewery table
     * @returns {Object<Brewery>}
     * @async
     */
    updateOneBrewery: async (req, res) => {
        req.body.id = parseInt(req.params.id);

        //check if the brewery exists
        const brewery = await Brewery.findOneByPk(req.body.id);
        if (!brewery) {
            res.status(404).json("No brewery with this id");
        } else {
            //create an instance of brewery with datas from the body
            const newBrewery = new Brewery(req.body);
            try {
                //try to update it into the DB  and returns the json of the new brewery
                await newBrewery.save();
                res.status(200).json(newBrewery);
            } catch (err) {
                //if the insert fails returns the error message.

                res.status(500).json(err);
            }
        }
    },

    /**
     * Deletes a brewery from the brewery table
     * @async
     * @returns
     */
    deleteOneBrewery: async (req, res) => {
        //check if the brewery exists
        const id = req.params.id;

        const brewery = await Brewery.findOneByPk(id);

        if (!brewery) {
            res.status(404).json(`No brewery with the id ${id}`);
        } else {
            try {
                await Brewery.delete(id);
                res.json("Brewery successfully deleted");
            } catch (err) {
                res.status(500).json(err.message);
            }
        }
    },
};

module.exports = breweryController;
