const authVerificator = (req, res, next) => {
  try {
    const { token } = req;
    console.log(
      `hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
      req.headers.api_key,
      token
    );
    next();
  } catch (err) {
    res.status(400).send(err?.message);
  }
};

module.exports = authVerificator;
