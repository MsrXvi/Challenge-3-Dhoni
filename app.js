const express = require('express');
const morgan = require("morgan");
const app = express();

const carRouter = require('./route/carRouter');

app.use(express.json())

app.use(morgan('dev'));

app.use((req, res, next) => {
    next();
});

app.use((req, res, next )=> {
    req.requesTime = new Date().toISOString();
    next();
})
app.use("/api/v1/cars", carRouter);
module.exports = app;