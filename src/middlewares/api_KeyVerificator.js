const api_key_verificator = (req, res, next) => {
  try {
    if (req.headers.api_key !== "fomophobic")
      throw new Error("Invalid API Key");
    next();
  } catch (err) {
    res.status(400).send(err?.message);
  }
};

module.exports = api_key_verificator;
