const db = require("../database");

/**
 * A entity representing a user
 * @typedef User
 * @property {number} id
 * @property {string} nickname
 * @property {string} email
 * @property {string} password
 * @property {string} role
 */

/**
 * A model representing a user
 * @class
 */
class User {
    /**
     * The user constructor
     * @param {Object} data - a litteral object with properties that will be copied into the instance
     */
    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    /**
     * Fetches a user in the database
     * @returns {User.model}
     * @param {string} email
     * @async
     * @static
     */
    static async findOneByEmail(email) {
        const { rows } = await db.query(
            `SELECT * FROM "user" WHERE email=$1;`,
            [email]
        );
        if (rows[0]) {
            return new User(rows[0]);
        } else {
            return null;
        }
    }

    async save() {
        try {
            const { rows } = await db.query(
                'INSERT INTO "user" ("nickname", email, password, role) VALUES ($1, $2, $3, $4) RETURNING id;',
                [this.nickname, this.email, this.password, this.role]
            );

            this.id = rows[0].id;
        } catch (err) {
            // If there is an sql error, throws it to the controller
            throw new Error(err.detail);
        }
    }
}

module.exports = User;
