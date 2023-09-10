const db = require("../sequelize/models");

const ticketCodeVerificator = async (req, res, next) => {
  try {
    const { ticketcode, eventid, userid } = req.body;
    const ticket = await db.Ticket.findOne({
      where: { ticketcode, eventid, userid },
    });
    if (!ticket)
      throw new Error(
        "Either your ticketcode, event, or account does not match"
      );
    next();
  } catch (err) {
    return res.send(err?.message);
  }
};

module.exports = ticketCodeVerificator;
