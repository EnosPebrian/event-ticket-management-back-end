const db = require("../sequelize/models");
const Controller = require("./Controller");
const sharp = require("sharp");

class Photo_eventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }

  async testBlobImage(req, res) {
    console.log(req.file);
    console.log(req.body);
    if (req.file) {
      req.body.image_blob = await sharp(req.file.buffer).png().toBuffer();
      req.body.url = req.file.originalname;
    }
    db.Photo_event.update(req.body, {
      where: { id: req.body.id },
    });

    res.send("testing ok");
  }
}

module.exports = new Photo_eventController(`Photo_event`);
