const db = require("../sequelize/models");
const Controller = require("./Controller");

class Photo_eventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new Photo_eventController(`Photo_event`);
