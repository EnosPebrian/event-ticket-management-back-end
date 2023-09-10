const db = require("../sequelize/models");
const jwt = require("jsonwebtoken");

const delete_modify_discussionReply_verificator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userid } = req.body;
    const { token } = req;
    const review = await db.Discussion_reply.findByPk(id);
    if (!review) throw new Error("Invalid review id");
    const data = jwt.verify(token, process.env.jwt_secret);

    if (data.id !== userid || data.id !== review.userid) {
      const user = await db.User.findByPk(data.id);
      if (user.role === 3) throw new Error("Your credential does not match");
    }
    delete req?.body?.eventid;
    delete req?.body?.userid;
    next();
  } catch (err) {
    return res.status(400).send(err?.message);
  }
};

module.exports = delete_modify_discussionReply_verificator;
