import { Request, Response, NextFunction } from "express";
import * as service from "../services/product.services";
import { HttpResponse } from "../utils/http.response";

const http_response = new HttpResponse();

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const new_product = await service.create(req.body);
        if (!new_product) http_response.INTERNAL_SERVER_ERROR(res, 'Ha ocurrido un error al crear el producto.')
        else http_response.OK(res, new_product)
    } catch (error:unknown) {
        next((error as Error).message);
    }
}

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await service.getAll();
        if (!products) http_response.NOT_FOUND(res, "Error get")
        else http_response.OK(res, products);
    } catch (error:unknown) {
        next((error as Error).message);
    }
}
export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const product = await service.getById(id);
        if (!product) http_response.NOT_FOUND(res, "No existe este producto");
        else http_response.OK(res, product);
    } catch (error:unknown) {
        next((error as Error).message);
    }
}
export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const udpated_product = await service.update(id, data);
        if (!udpated_product) http_response.NOT_FOUND(res, "No existe este producto");
        else http_response.OK(res, udpated_product);
    } catch (error:unknown) {
        next((error as Error).message);
    }
}
export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const deleted_product = await service.remove(id);
        if (!deleted_product) http_response.NOT_FOUND(res, "No existe este producto");
        else http_response.OK(res, deleted_product);
    } catch (error:unknown) {
        next((error as Error).message);
    }
}