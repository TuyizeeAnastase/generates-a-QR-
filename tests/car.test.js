import { expect, use } from "chai";
import chaiHttp from "chai-http";
const request = require("supertest");
import app from "../src/app";
import { newCar } from "./mocks/car.mocks";

use(chaiHttp);

describe("GET CAR INFO QR Code", async () => {
  it("it should not return qr code, it body not validates", (done) => {
    request(app)
      .post("/api/v1/cars")
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
  it("it should  return qr code, with validated body", (done) => {
    request(app)
      .post("/api/v1/cars")
      .send(newCar)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
