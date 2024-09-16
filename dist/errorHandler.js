"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = require("hono/http-exception");
const errorHandler = (err, _) => {
    if (err instanceof http_exception_1.HTTPException) {
        return err.getResponse();
    }
    const response = new Response(err.message, { status: 500 });
    return response;
};
exports.default = errorHandler;
