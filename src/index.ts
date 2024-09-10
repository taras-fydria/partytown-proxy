import { serve } from "@hono/node-server";
import { Hono } from "hono";
import router from "./router";
import errorHandler from "./errorHandler";
import { cors } from "hono/cors";
import { config } from "dotenv";
config();

const app = new Hono();

app.use(cors({ origin: "*" }));
app.route("/", router);
app.onError(errorHandler);

const port = process.env.HTTP_PORT;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
