import dbConnect from "../../../utils/dbConnect";
import SkurlisteModel from "../../../models/SkurlisteModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const skurliste = await SkurlisteModel.find({});

        res.status(200).json({ success: true, data: skurliste });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
