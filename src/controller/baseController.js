const db = require("../db/dbConfiguration");

const baseController = {
  table: "",
  getAll: async (req, res) => {
    try {
      const [response] = await db
        .promise()
        .query(`SELECT * FROM ${baseController.table}`);
      return res.send(response);
    } catch (err) {
      return res.status(404).send(err.message);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const data = Object.entries(req.body);
      console.log(data);
      for (item of data) {
        await db
          .promise()
          .query(
            `UPDATE ${baseController.table} SET ${item[0]}=${
              typeof item[1] === "string" ? "'" + item[1] + "'" : item[1]
            } WHERE id=${id}`
          );
      }
      return res.send("updated");
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const [[response]] = await db
        .promise()
        .query(`SELECT * FROM ${baseController.table} WHERE id=${id}`);
      if (!response) return res.status(404).send("ID not found");
      return res.send(response);
    } catch (err) {
      return res.status(404).send(err.message);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await db
        .promise()
        .query(`DELETE FROM ${baseController.table} WHERE id=${id}`);
      return res.send("deleted");
    } catch (err) {
      return res.status(400).send(err.message);
    }
  },
};

module.exports = baseController;
