const jwt = require("jsonwebtoken");

const authVerificator = (req, res, next) => {
  try {
    const { token } = req;
    const user_id = req.body;
    const data = jwt.verify(token, process.env.jwt_secret);
    if (req.headers.api_key !== "fomophobic")
      throw new Error("Invalid API Key");
    if (data.id !== user_id) throw new Error("Your credential does not match");
    next();
  } catch (err) {
    res.status(400).send(err?.message);
  }
};

module.exports = authVerificator;
