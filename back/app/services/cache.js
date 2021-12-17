const redis = require("redis");

const client = redis.createClient();

const PREFIX = "rando_biere:";
const PEREMPTION = 60 * 10; // 30 minutes

const { promisify } = require("util");

const asyncClient = {
    get: promisify(client.get).bind(client),
    del: promisify(client.del).bind(client),
    exists: promisify(client.exists).bind(client),
    setex: promisify(client.setex).bind(client),
};

const keysIndex = [];

/**
 * clears the cache
 */
const flush = async (req, res, next) => {
    // deletes every key in redis client
    for (const key of keysIndex) {
        await asyncClient.del(key);
    }
    //reset array length
    keysIndex.length = 0;
    next();
};

/**
 * generates the cache
 * @param { number } duration - time (minutes) until cache clears itself
 */
const cache =
    (duration = PEREMPTION) =>
    async (req, res, next) => {
        const urlKey = PREFIX + req.url;

        // checks if it's contained in the cache
        if (await asyncClient.exists(urlKey)) {
            // fetches it from cache
            const cachedValue = await asyncClient.get(urlKey);
            const value = JSON.parse(cachedValue);

            res.json(value);

            // puts it in the cache
        } else {
            const originalResDotJson = res.json.bind(res);

            res.json = async (responseData) => {
                const jsonData = JSON.stringify(responseData);
                await asyncClient.setex(urlKey, duration, jsonData);
                keysIndex.push(urlKey);
                originalResDotJson(responseData);
            };

            next();
        }
    };

module.exports = {
    flush,
    cache,
};
