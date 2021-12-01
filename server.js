const express = require("express");
const app = express();
const {connect} = require("./app/config/database");
const cors = require("cors");
const logger = require("morgan");

const animals = require("./app/api/routes/animal.route");
const families = require("./app/api/routes/family.route");
const habitats = require("./app/api/routes/habitat.route");
const collaboration = require("./app/api/routes/collaboration.route");

const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");

connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3001'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(logger("dev"));

app.use("/animals", animals);
app.use("/families", families);
app.use("/habitats", habitats);
app.use("/collaboration", collaboration);

app.use((req, res, next) => {
    let err = new Error();
    err.status = 404;
    err.message = HTTPSTATUSCODE[404];
    next(err);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.disable('x-powered-by');

app.get('/debug', (req, res) => {
    console.log('This is a console message');
    res.send('Using debug module with Node.js');
});

app.listen(3000, () => {
  console.log("Node server listening on port 3000");
})