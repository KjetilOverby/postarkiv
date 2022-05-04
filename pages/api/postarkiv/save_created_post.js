import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const post = await Poster(req.body);
          post.save().then(() => {
            res.send(post);
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
