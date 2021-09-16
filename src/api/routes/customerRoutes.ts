import express from "express";

import { CustomerController } from "../controllers/customerController";

const router = express.Router();
const customerController = new CustomerController();

router.post('/customers', customerController.createAsync);

export default router;
