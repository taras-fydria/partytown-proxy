import { serve } from "@hono/node-server";
import { Hono } from "hono";
import router from "./router";
import errorHandler from "./errorHandler";
import { cors } from "hono/cors";
import { config } from "dotenv";
import { Options } from "@hono/node-server/dist/types";
import { createServer, ServerOptions } from "node:https";
import * as fs from "node:fs";
import * as path from "node:path";
config();

const app = new Hono();
app.use(cors({ origin: "*" }));
app.route("/", router);
app.onError(errorHandler);

const port = process.env.HTTP_PORT;

const serverOptions: ServerOptions = {
  key: fs.readFileSync(path.resolve(__dirname, "..", "localhost-privkey.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "..", "localhost-cert.pem")),
};

const options: Options = {
  fetch: app.fetch,
  port,
  createServer,
  serverOptions,
};

serve(options);
console.log(`Server is running on port ${port}`);
