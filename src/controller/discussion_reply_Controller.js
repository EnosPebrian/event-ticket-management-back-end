const db = require("../sequelize/models");
const Controller = require("./Controller");

class Discussion_replyController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new Discussion_replyController(`Discussion_reply`);
