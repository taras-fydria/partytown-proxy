import { Hono } from "hono";
import proxyGetHandler from "./proxyHandler";
const router = new Hono();
router.get("proxy/partytown", proxyGetHandler);
export default router;
