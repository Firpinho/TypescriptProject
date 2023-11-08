"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
class HttpResponse {
    OK(res, data) {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            msg: 'success.',
            data: data
        });
    }
    NOT_FOUND(res, data) {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            msg: 'Error: not found.',
            error: data
        });
    }
    UNAUTHORIZED(res, data) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            msg: 'Error: unauth.',
            error: data
        });
    }
    FORBIDDEN(res, data) {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            msg: 'Error: you are not allowed to be here.',
            error: data
        });
    }
    INTERNAL_SERVER_ERROR(res, data) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            msg: 'Error: server side error.',
            error: data
        });
    }
}
exports.HttpResponse = HttpResponse;
