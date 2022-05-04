import dbConnect from "../../../utils/dbConnect";
import Skurliste from "../../../models/SkurlisteModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "PATCH":
      if (req.query.user === process.env.USER_SUB) {
        try {
          const skurliste = await Skurliste.findByIdAndUpdate(
            { _id: req.query.ids },
            {
              treslag: req.body.treslag,
              klasse: req.body.klasse,
              klType: req.body.klType,
              klgr: req.body.klgr,
              ant: req.body.ant,
              m3: req.body.m3,
              status: req.body.status,
              post: req.body.post,
              breddePost: req.body.breddePost,
              xLog: req.body.xLog,
              prosent: req.body.prosent,
              anm: req.body.anm,
              anm2: req.body.anm2,
              vs66: req.body.vs66,
              vs66Br: req.body.vs66Br,
              vs66Xtra: req.body.vs66Xtra,
              vs66XtraBr: req.body.vs66XtraBr,
              blad: req.body.blad,
              mkvBord: req.body.mkvBord,
              mkvBr: req.body.mkvBr,
              date: req.body.date,
              progress: req.body.progress,
            },

            {
              new: true,
              runValidators: true,
            }
          );

          if (!skurliste) return res.status(404).send();
          res.send(skurliste);
        } catch (error) {
          res.status(400).send(error);
        }
      } else {
        res.send("Unauthorized request");
      }

      break;
  }
};
