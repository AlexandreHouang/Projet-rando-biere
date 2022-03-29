require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const cors = require("cors");

const corsOptions = {
    exposedHeaders: "Authorization",
};

const expressSwagger = require("express-swagger-generator")(app);

const apiRouter = require("./app/router");

const port = process.env.PORT || 5555;

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("./dist"));
app.use("/v1", apiRouter);

let options = {
    swaggerDefinition: {
        info: {
            description: "A REST API for the amazing website Rando-Bière",
            title: "Rando-Bière API",
            version: "1.0.0",
        },
        host: `ec2-54-225-0-75.compute-1.amazonaws.com`,
        //host: `ec2-3-85-243-18.compute-1.amazonaws.com`,
        basePath: "/v1",
        produces: ["application/json", "application/xml"],
        schemes: ["http", "https"],
    },
    basedir: __dirname, //app absolute path
    files: ["./app/router.js", "./app/models/*.js", "./app/controllers/*.js"], //Path to the API handle folder
};

expressSwagger(options);

// Middlewear to send the static index.html in case of wrong route
app.get("*", (req, res) => {
    const fileDirectory = path.resolve(__dirname, ".", "dist");

    res.sendFile("index.html", { root: fileDirectory }, (err) => {
        res.end();

        if (err) throw err;
    });
});

app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
);
