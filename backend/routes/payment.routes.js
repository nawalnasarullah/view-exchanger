import express from "express";
const router = express.Router();
import { processPayments} from "../controllers/payment.controller.js";

router.route('/payment').post(processPayments);

export default router;