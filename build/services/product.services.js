"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.create = void 0;
const product_model_1 = require("../models/product.model");
const create = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const new_product = yield product_model_1.ProductModel.create(product);
        new_product ? new_product : false;
        return new_product;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.ProductModel.find({});
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response_product = yield product_model_1.ProductModel.findById(id);
        if (!response_product)
            return false;
        return response_product;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getById = getById;
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated_product = yield product_model_1.ProductModel.findByIdAndUpdate(id, body, { new: true });
        if (!updated_product)
            return false;
        return updated_product;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removed_product = yield product_model_1.ProductModel.findByIdAndDelete(id);
        if (!removed_product)
            return false;
        return removed_product;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.remove = remove;
