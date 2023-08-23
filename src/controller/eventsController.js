const db = require("../db/dbConfiguration");

const controller = require("./baseController");
controller.table = "events";

const getAllEvents = controller.getAll;
const update = controller.update;
const getOne = controller.getOne;
const deleteOne = controller.delete;

module.exports = { getAllEvents, update, getOne, deleteOne };
