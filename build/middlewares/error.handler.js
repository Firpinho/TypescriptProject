"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_response_1 = require("../utils/http.response");
const http_response = new http_response_1.HttpResponse();
const errorHandler = (err, res) => {
    return http_response.INTERNAL_SERVER_ERROR(res, err.message);
};
exports.errorHandler = errorHandler;
