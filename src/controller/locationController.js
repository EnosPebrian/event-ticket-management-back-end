const db = require("../sequelize/models");
const Controller = require("./Controller");

class ReviewController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new ReviewController(`Location`);
