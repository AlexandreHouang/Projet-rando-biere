const db = require("../database");
/**
 * A entity representing an hike
 * @typedef Hike
 * @property {number} id
 * @property {string} name
 * @property {string} main_img
 * @property {string} description
 * @property {string} gpx_url
 * @property {string} map_url
 * @property {string} difficulty
 * @property {string} time
 * @property {number} distance
 * @property {number} max_altitude
 * @property {number} min_altitude
 * @property {number} brewery_id
 */

/**
 * A model representing a hike
 * @class
 */
class Hike {
    /**
     * The hike constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    /**
     * Fetches every hike related to one brewery from the database
     * @returns {Array<Hike>}
     * @async
     * @static
     */

    static async findAllByBreweryId(id) {
        const { rows } = await db.query(
            "SELECT * FROM hike WHERE brewery_id=$1;",
            [id]
        );
        return rows.map((row) => new Hike(row));
    }

    /**
     * Fetches a hike by its id
     * @param { number } id
     * @return {Object<Brewery>}
     * @async
     * @static
     */
    static async findOneByPk(id) {
        const { rows } = await db.query("SELECT * FROM hike WHERE id=$1;", [
            id,
        ]);
        if (rows[0]) {
            return new Hike(rows[0]);
        } else {
            return null;
        }
    }
}

module.exports = Hike;
