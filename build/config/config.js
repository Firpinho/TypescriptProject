"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL
};
