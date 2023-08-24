const db = require("../db/dbConfiguration");

const controller = require("./baseController");
controller.table = "users";

const getAll = controller.getAll;
const update = controller.update;
const getById = controller.getById;
const deleteOne = controller.delete;
const getByQuery = (req, res) => {};

module.exports = {
  getAll,
  update,
  getById,
  deleteOne,
};
