const jwt = require("jsonwebtoken");
const responseHelper = require("../helper/responseHelper").responseHelper;

const config = process.env;

module.exports.verifyToken = (req, res, next) => {
  const token =
    /* req.body.token || req.query.token || */ req.headers["x-access-token"];

  if (!token) {
    return responseHelper(
      res.status(401).send("A token is required for authentication")
    );
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return responseHelper(res.status(403).send("Unauthorized access"));
  }
  return next();
};

//module.exports = verifyToken;
