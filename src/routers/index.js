import express from "express";
import carRoutes from "./car.routes";

const routes = express();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "This car QR-code generator",
  });
});

routes.use("/api/v1/cars", carRoutes);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
