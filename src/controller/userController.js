const db = require("../sequelize/models");
const Controller = require("./Controller");

class UserController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
}

module.exports = new UserController(`User`);
