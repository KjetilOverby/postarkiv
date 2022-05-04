import dbConnect from "../../../utils/dbConnect";
import SkurlisteModel from "../../../models/SkurlisteModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const skurliste = await SkurlisteModel(req.body);
          skurliste.save().then(() => {
            res.send(skurliste);
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.send("Unauthorized request");
      }

      break;
  }
};
