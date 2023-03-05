import express from "express";
import carQRCodeController from "../controllers/car.controllers";
import { carValidation } from "../validations/car.validations";

const routes = express();

routes.post("/", carValidation, carQRCodeController.createQRCode);

export default routes;
