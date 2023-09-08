const { where } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");
const user = require("../sequelize/models/user");

class TransactionController extends Controller {
  constructor(modelname) {
    super(modelname);
  }

  async getTransactionById(req, res) {
    try {
      const transactionData = await this.db.findByPk(req.params.id, {
        include: [{ model: db.User }, { model: db.Event }],
      });
      res.status(200).send(transactionData);
    } catch (error) {
      res.status(500).send(error?.message);
    }
  }

  async createTransaction(req, res) {
    try {
      const eventData = await db.Event.findByPk(req.body.event_id);
      if (req.body.vip_ticket) {
        const userData = await db.User.findByPk(req.body.user_id);
        //cek apakah saldo cukup
        if (userData.points < eventData.vip_ticket_price)
          return res.status(400).send("saldo tidak cukup");
        // cek apakah stok masih ada
        if (eventData.vip_ticket_stock < 1)
          return res.status(400).send("tiket vip sudah habis");
        await eventData.increment({ vip_ticket_stock: -1 });
        //ngurangin saldo user
        await userData.increment({ points: -eventData.vip_ticket_price });
        const transactionData = await this.db.create({
          user_id: req.body.user_id,
          event_id: req.body.event_id,
          ticket_category: "vip",
          total_price: eventData.vip_ticket_price,
        });
        res.status(201).send(transactionData);
      } else if (req.body.normal_ticket) {
        const userData = await db.User.findByPk(req.body.user_id);
        //cek apakah saldo cukup
        if (userData.points < eventData.normal_ticket_price)
          return res.status(400).send("saldo tidak cukup");
        // cek apakah stok masih ada
        if (eventData.normal_ticket_stock < 1)
          return res.status(400).send("tiket normal sudah habis");
        await eventData.increment({ normal_ticket_stock: -1 });
        //ngurangin saldo user
        await userData.increment({ points: -eventData.normal_ticket_price });
        const transactionData = await this.db.create({
          user_id: req.body.user_id,
          event_id: req.body.event_id,
          ticket_category: "normal",
          total_price: eventData.normal_ticket_price,
        });
        res.status(201).send(transactionData);
      } else {
        const userData = await db.User.findByPk(req.body.user_id);
        //cek apakah saldo cukup
        if (userData.points < eventData.presale_ticket_price)
          return res.status(400).send("saldo tidak cukup");
        // cek apakah stok masih ada
        if (eventData.presale_ticket_stock < 1)
          return res.status(400).send("tiket presale sudah habis");
        await eventData.increment({ presale_ticket_stock: -1 });
        //ngurangin saldo user
        await userData.increment({ points: -eventData.presale_ticket_price });
        const transactionData = await this.db.create({
          user_id: req.body.user_id,
          event_id: req.body.event_id,
          ticket_category: "presale",
          total_price: eventData.presale_ticket_price,
        });
        res.status(201).send(transactionData);
      }
    } catch (error) {
      res.status(500).send(error?.message);
    }
  }
}

module.exports = new TransactionController(`Transaction`);
