"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const proxyHandler_1 = require("./proxyHandler");
const router = new hono_1.Hono();
router.get("proxy/partytown", proxyHandler_1.default);
exports.default = router;
