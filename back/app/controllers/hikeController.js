const Brewery = require("../models/brewery");
const Hike = require("../models/hike");
const Photo = require("../models/photo");

const hikeController = {
    /**
     * fetches one hike with its associated photos and brewery
     * @return  {Hike.model}
     * @async
     * @static
     */
    getAHikeWithDetails: async (req, res) => {
        const { id } = req.params;

        const theHike = await Hike.findOneByPk(id);

        if (!theHike) {
            res.status(404).send("No hike with this id");
        } else {
            theHike.photos = [];

            // fetches all photos related to the hike
            const hikePhotos = await Photo.findAllByHikeId(id);
            for (const photo of hikePhotos) {
                theHike.photos.push(photo);
            }

            theHike.brewery = await Brewery.findOneByPk(theHike.brewery_id);

            res.json(theHike);
        }
    },
    
};

module.exports = hikeController;
