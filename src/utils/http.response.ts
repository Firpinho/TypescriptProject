import { Response } from "express";

export enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}

export class HttpResponse {
    OK(res: Response, data ?: any): Response{
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            msg: 'success.',
            data: data
        })
    }
    NOT_FOUND(res: Response, data ?: any): Response{
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            msg: 'Error: not found.',
            error: data
        })
    }
    UNAUTHORIZED(res: Response, data ?: any): Response{
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            msg: 'Error: unauth.',
            error: data
        })
    }
    FORBIDDEN(res: Response, data ?: any): Response{
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            msg: 'Error: you are not allowed to be here.',
            error: data
        })
    }
    INTERNAL_SERVER_ERROR(res: Response, data ?: any): Response{
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            msg: 'Error: server side error.',
            error: data
        })
    }
}