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
const http_exception_1 = require("hono/http-exception");
const proxyGetHandler = (c) => __awaiter(void 0, void 0, void 0, function* () {
    const urlQuery = c.req.query("url");
    if (!urlQuery)
        throw new http_exception_1.HTTPException(401, { message: "Missing url query parameter" });
    const res = yield fetch(urlQuery);
    const headers = Object.assign({}, res.headers);
    if ("content-encoding" in headers)
        delete headers["content-encoding"];
    if ("content-length" in headers)
        delete headers["content-length"];
    return new Response(res.body, { headers });
});
exports.default = proxyGetHandler;
