import QRCode from "qrcode";

export class GenerateCarQRCodeControllers {
  async createQRCode(req, res) {
    try {
      const { driver_name, car_plate, phone_number } = req.body;
      let stringData = JSON.stringify({ driver_name, car_plate, phone_number });
      QRCode.toString(stringData, { type: "terminal" }, (err, QRcode) => {
        if (err) return console.log("error occurred");
        console.log(QRcode);
      });
      QRCode.toDataURL(stringData, (err, code) => {
        if (err) return console.log(err);
        return res.status(201).json({
          message:"QRCode generated successfully",
          code,
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while generating QRCode,try again",
        error: err.message,
      });
    }
  }
}

const carQRCodeController = new GenerateCarQRCodeControllers();
export default carQRCodeController;
