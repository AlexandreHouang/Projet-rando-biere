const db = require("../database");

/**
 * A entity representing a brewery
 * @typedef Brewery
 * @property {number} id
 * @property {string} name
 * @property {string} main_img
 * @property {string} description
 * @property {string} region
 * @property {string} slug
 * @property {string} adress
 * @property {string} email
 * @property {number} phone_number
 * @property {number} user_id
 */

/**
 * A model representing a brewery
 * @class
 */
class Brewery {
    /**
     * The Brewery constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    /**
     * Fetches every breweries from the database
     * @returns {Array<Brewery>}
     * @async
     * @static
     */
    static async findAll() {
        const { rows } = await db.query(
            "SELECT * FROM brewery_with_hikescount;"
        );

        return rows.map((row) => new Brewery(row));
    }

    /**
     * fetches all breweries from one region
     * @param { string } region the region
     * @return {Array<Brewery>}
     * @async
     * @static
     */
    static async findAllByRegion(region) {
        const { rows } = await db.query(
            "SELECT * FROM brewery_with_hikescount WHERE region=$1;",
            [region]
        );
        return rows.map((row) => new Brewery(row));
    }

    /**
     * fetches one brewery from the db by its id
     * @param { number } id the id
     * @return {Brewery.model}
     * @async
     * @static
     */
    static async findOneByPk(id) {
        const { rows } = await db.query(
            "SELECT * FROM brewery_with_hikescount WHERE id=$1;",
            [id]
        );
        if (rows[0]) {
            return new Brewery(rows[0]);
        } else {
            return null;
        }
    }

    /**
     * Insert or Uptade into the instance into the table brewery
     * @async
     */
    async save() {
        // if id, UPDATE, otherwise, INSERT
        if (this.id) {
            try {
                const { rows } = await db.query(
                    'UPDATE brewery SET "name"=$1 , main_img=$2, "description"=$3, region=$4, slug=$5, adress=$6, email=$7, phone_number=$8, "user_id"=$9 WHERE id=$10',
                    [
                        this.name,
                        this.main_img,
                        this.description,
                        this.region,
                        this.slug,
                        this.adress,
                        this.email,
                        this.phone_number,
                        this.user_id,
                        this.id,
                    ]
                );
            } catch (err) {
                // If there is an sql error, throws it to the controller
                console.log(err);
                throw new Error(err.detail);
            }
        } else {
            try {
                const { rows } = await db.query(
                    'INSERT INTO brewery ("name", main_img, "description", region, slug, adress, email, phone_number, "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;',
                    [
                        this.name,
                        this.main_img,
                        this.description,
                        this.region,
                        this.slug,
                        this.adress,
                        this.email,
                        this.phone_number,
                        this.user_id,
                    ]
                );

                this.id = rows[0].id;
            } catch (err) {
                // If there is an sql error, throws it to the controller
                throw new Error(err.detail);
            }
        }
    }

    /**
     * Deletes a brewery from the brewery table
     * @param { number } id the id
     * @async
     */
    static async delete(id) {
        try {
            await db.query("DELETE FROM brewery  WHERE id=$1;", [id]);
        } catch (err) {
            // If there is an sql error, throws it to the controller

            throw new Error(err.detail);
        }
    }
}

module.exports = Brewery;
