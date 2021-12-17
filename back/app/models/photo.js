const db = require("../database");

/**
 * A entity representing a photo
 * @typedef Photo
 * @property {number} id
 * @property {string} url
 * @property {string} caption
 * @property {string} alternative_text
 * @property {number} brewery_id or
 * @property {number} hike_id
 */

/**
 * A model representing a photo
 * @class
 */
class Photo {
    /**
     * The Photo constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
    /**
     * Fetches every photo in the database of a brewery by its id
     * @returns {Array<Photo>}
     * @async
     * @static
     */
    static async findAllByBreweryId(id) {
        const {
            rows,
        } = await db.query("SELECT * FROM brewery_photo WHERE brewery_id=$1;", [
            id,
        ]);
        return rows.map((row) => new Photo(row));
    }

    /**
     * Fetches every photo in the database of an hike by its id
     * @returns {Array<Photo>}
     * @async
     * @static
     */
    static async findAllByHikeId(id) {
        const {
            rows,
        } = await db.query("SELECT * FROM hike_photo WHERE hike_id=$1;", [id]);
        return rows.map((row) => new Photo(row));
    }
}

module.exports = Photo;
