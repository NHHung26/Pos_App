const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  try {
    const token = req.header("token");
    const decode = jwt.verify(token, "huyhung26082002");
    if (decode) {
      req.user = decode;
      next();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = authenticate;
