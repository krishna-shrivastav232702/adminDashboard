import express from "express";
import {getProducts} from "../controllers/client.controller.js"
import {getCustomers} from "../controllers/client.controller.js"
import {getTransactions} from "../controllers/client.controller.js"
import {getGeography} from "../controllers/client.controller.js"

const router = express.Router();

router.get("/products",getProducts);
router.get("/customers",getCustomers);
router.get("/transactions",getTransactions);
router.get("/geography",getGeography);

export default router;