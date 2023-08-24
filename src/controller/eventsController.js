const db = require("../db/dbConfiguration");

const controller = require("./baseController");
controller.table = "events";

const getAllEvents = controller.getAll;
const update = controller.update;
const getById = controller.getById;
const deleteOne = controller.delete;
const getByQuery = (req, res) => {};

module.exports = {
  getAllEvents,
  update,
  getById,
  deleteOne,
};
