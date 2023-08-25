const db = require("../sequelize/models");
const Controller = require("./Controller");

class DiscussionController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new DiscussionController(`Discussion`);
