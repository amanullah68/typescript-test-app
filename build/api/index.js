"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var test_1 = __importDefault(require("./routes/test"));
// guaranteed to get dependencies
exports.default = (function () {
    var app = express_1.Router();
    test_1.default(app);
    return app;
});
