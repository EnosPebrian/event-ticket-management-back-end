const db = require("../sequelize/models");
const Controller = require("./Controller");

class EventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getByQuery(req, res) {
    const { name, location, category, date_start, date_end } = req.params;
    this.db.findAll({
      where: { name: name },
    });
  }
}

module.exports = new EventController(`Event`);
