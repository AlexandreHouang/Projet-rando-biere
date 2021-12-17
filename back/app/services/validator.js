const validator = {
    /**
     * uses the brewery schema to check data
     */
    validateBody: (schema) => (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            res.status(400).json(error.details[0].message);
        } else {
            next();
        }
    },
};

module.exports = validator;
