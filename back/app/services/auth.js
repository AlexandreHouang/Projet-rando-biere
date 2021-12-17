const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const bcrypt = require("bcrypt");

/**
 * checks if the login informations match an existing user in db & if so generates a token
 */
const authService = {
    // checks if a user in DB matches the login infos, send back a token in the headers
    auth: async (req, res, next) => {
        const { email, password } = req.body;

        try {
            // checks if there is an email-adress in db matching the one used to login
            let user = await User.findOneByEmail(email);

            if (user) {
                // compares with bcryt the passwords

                const match = await bcrypt.compare(password, user.password);

                // checks if the password matches the user's
                if (match) {
                    // create a token and send it as an header
                    const expireIn = 24 * 60 * 60;
                    const token = jwt.sign(
                        {
                            user: user,
                        },
                        SECRET_KEY,
                        {
                            expiresIn: expireIn,
                        }
                    );

                    res.header("Authorization", "Bearer " + token);

                    return res.status(200).json("auth_ok");
                }
                return res.status(403).json("wrong_password");
            } else {
                return res.status(404).json("user_not_found");
            }
        } catch (error) {
            return res.status(501).json(error);
        }
    },
};

module.exports = authService;
