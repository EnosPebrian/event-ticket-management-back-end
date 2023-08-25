const db = require("../sequelize/models");
const Controller = require("./Controller");

class EventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new EventController(`Event`);
