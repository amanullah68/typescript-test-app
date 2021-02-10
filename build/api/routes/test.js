"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import middlewares from '../middlewares';
var route = express_1.Router();
exports.default = (function (app) {
    app.use('/', route);
    route.get('/test', function (req, res) {
        return res.json({ test: 'working1123' }).status(200);
    });
});
