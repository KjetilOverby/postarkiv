import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

export default async (req, res) => {
  const { method } = req;
   console.log(req.body.header);
  switch (method) {
    case "PATCH":
      try {
        const post = await Poster.findByIdAndUpdate({_id: req.query.ids},

        {
          header: req.body.header,
        },
        { new: true,
          runValidators: true,
        }
        );

        if (!post) return res.status(404).send();
          res.send(post);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};