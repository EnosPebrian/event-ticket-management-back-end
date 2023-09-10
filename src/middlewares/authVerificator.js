const jwt = require("jsonwebtoken");
const db = require("../sequelize/models");

const authVerificator = async (req, res, next) => {
  try {
    const { token } = req;
    const { userid } = req.body;
    const data = jwt.verify(token, process.env.jwt_secret);
    if (req.headers.api_key !== "fomophobic") {
      throw new Error("Invalid API Key");
    }

    if (data.id !== userid) throw new Error("Your credential does not match");
    next();
  } catch (err) {
    return res.status(400).send(err?.message);
  }
};

module.exports = authVerificator;
