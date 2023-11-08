import { HttpResponse } from "../utils/http.response";
import { Response } from "express";

const http_response = new  HttpResponse();

export const errorHandler = (err: any, res: Response):Response => {
    return http_response.INTERNAL_SERVER_ERROR(res, err.message);
}