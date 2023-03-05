import QRCode from "qrcode";

export class GenerateCarQRCodeControllers {
  async createQRCode(req, res) {
    const { driver_name, car_plate, phone_number } = req.body;
    let stringData = JSON.stringify({ driver_name, car_plate, phone_number });
    QRCode.toString(stringData, { type: "terminal" }, function (err, QRcode) {
      if (err) return console.log("error occurred");
      console.log(QRcode);
    });
  }
}

const carQRCodeController = new GenerateCarQRCodeControllers();
export default carQRCodeController;
