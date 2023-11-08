"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./config/connection");
const config_1 = __importDefault(require("./config/config"));
const error_handler_1 = require("./middlewares/error.handler");
const index_router_1 = __importDefault(require("./routes/index.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, connection_1.databaseConnection)().then(() => console.log("Database connected.")).catch((error) => console.log('Database connection error : ', error));
const PORT = config_1.default.PORT;
app.use('/api', index_router_1.default);
app.use(error_handler_1.errorHandler);
app.listen(PORT, () => console.log('Server on port : ', PORT));
