const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

/**
 * checks if there is a valid token & generates a new one as a security
 */
const jwtSecurity = {
    /**
     * checks if the token is valid
     */
    checkJWT: (req, res, next) => {
        let token =
            req.headers["x-access-token"] || req.headers["authorization"];
        // slices the word bearer to keep only the token
        if (!!token && token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);
        }

        if (token) {
            // uses a jsonwebtoken method to check if the token is valid
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json("token_not_valid");
                } else {
                    req.decoded = decoded;

                    //creates a new token
                    const expiresIn = 24 * 60 * 60;
                    const newToken = jwt.sign(
                        {
                            user: decoded.user,
                        },
                        SECRET_KEY,
                        {
                            expiresIn: expiresIn,
                        }
                    );
                    // sends it as a response
                    res.header("Authorization", "Bearer " + newToken);
                    next();
                }
            });
        } else {
            return res.status(401).json("token_required");
        }
    },
};

module.exports = jwtSecurity;
