"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const router_1 = require("./router");
const errorHandler_1 = require("./errorHandler");
const cors_1 = require("hono/cors");
const dotenv_1 = require("dotenv");
const node_https_1 = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
(0, dotenv_1.config)();
const app = new hono_1.Hono();
app.use((0, cors_1.cors)({ origin: "*" }));
app.route("/", router_1.default);
app.onError(errorHandler_1.default);
const port = process.env.HTTP_PORT;
const serverOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "..", "localhost-privkey.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "..", "localhost-cert.pem")),
};
const options = {
    fetch: app.fetch,
    port,
    createServer: node_https_1.createServer,
    serverOptions,
};
(0, node_server_1.serve)(options);
console.log(`Server is running on port ${port}`);
