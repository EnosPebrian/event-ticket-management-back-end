const db = require("../sequelize/models");
const Controller = require("./Controller");
const sharp = require("sharp");

class Photo_eventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }

  async addPhotoEvent(req, res) {
    try {
      if (req.file) {
        req.body.image_blob = await sharp(req.file.buffer).jpeg().toBuffer();
        req.body.url = req.file.originalname;
      } else {
        return res.status(500).send("Masukkan gambar dan id event");
      }
      db.Photo_event.update(req.body, {
        where: { id: req.body.id },
      });
    } catch (err) {
      res.status(500).send(err?.message);
    }

    res.send("Gambar berhasil di upload");
  }
}

module.exports = new Photo_eventController(`Photo_event`);
