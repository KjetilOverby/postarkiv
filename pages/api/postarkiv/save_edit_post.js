import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "PATCH":
      try {
        const post = await Poster.findByIdAndUpdate({_id: req.query.ids},

        {
          header: req.body.headerString,
          prosent: req.body.prosent,
          planker: req.body.planker,
          spes: req.body.spes,
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