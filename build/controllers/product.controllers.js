"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const service = __importStar(require("../services/product.services"));
const http_response_1 = require("../utils/http.response");
const http_response = new http_response_1.HttpResponse();
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const new_product = yield service.create(req.body);
        if (!new_product)
            http_response.INTERNAL_SERVER_ERROR(res, 'Ha ocurrido un error al crear el producto.');
        else
            http_response.OK(res, new_product);
    }
    catch (error) {
        next(error.message);
    }
});
exports.create = create;
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield service.getAll();
        if (!products)
            http_response.NOT_FOUND(res, "Error get");
        else
            http_response.OK(res, products);
    }
    catch (error) {
        next(error.message);
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield service.getById(id);
        if (!product)
            http_response.NOT_FOUND(res, "No existe este producto");
        else
            http_response.OK(res, product);
    }
    catch (error) {
        next(error.message);
    }
});
exports.getById = getById;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const udpated_product = yield service.update(id, data);
        if (!udpated_product)
            http_response.NOT_FOUND(res, "No existe este producto");
        else
            http_response.OK(res, udpated_product);
    }
    catch (error) {
        next(error.message);
    }
});
exports.update = update;
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted_product = yield service.remove(id);
        if (!deleted_product)
            http_response.NOT_FOUND(res, "No existe este producto");
        else
            http_response.OK(res, deleted_product);
    }
    catch (error) {
        next(error.message);
    }
});
exports.remove = remove;
