require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  // Get the token from the header
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res.status(401).send({ message: "You can not access this" });

  // Verify the token
  jwt.verify(token, process.env.TOKEN_SECRECT_KEY, (err, token) => {
    if (err) return res.status(403).send({ message: "Token is not valid" });
    req.user = token;
    next();
  });
};

module.exports = { verifyToken };
