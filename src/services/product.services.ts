import { response } from "express";
import { Product } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

export const create = async (product:Product):Promise<Product | boolean> => {
    try {
        const new_product = await ProductModel.create(product);
        new_product ? new_product : false;
        return new_product;
    } catch (error:unknown) {
        throw new Error((error as Error).message);
    }
};

export const getAll = async ():Promise<Product[] | []> => {
    try {
        return await ProductModel.find({});
    } catch (error:unknown) {
        throw new Error((error as Error).message);
    }
};

export const getById = async (id: string): Promise<Product | boolean> => {
    try {   
        const response_product = await ProductModel.findById(id);
        if(!response_product) return false;
        return response_product;
    } catch (error:unknown) {
        throw new Error((error as Error).message);
    }
};

export const update = async (id:string, body:Product): Promise<Product | boolean> => {
    try {
        const updated_product = await ProductModel.findByIdAndUpdate(id, body, {new: true});
        if (!updated_product) return false
        return updated_product;
    } catch (error:unknown) {
        throw new Error((error as Error).message);
    }
};

export const remove = async (id: string): Promise<Product | boolean>  => {
    try {
        const removed_product = await ProductModel.findByIdAndDelete(id);
        if (!removed_product) return false
        return removed_product;
    } catch (error:unknown) {
        throw new Error((error as Error).message);
    }
};
