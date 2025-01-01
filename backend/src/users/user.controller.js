const jwt = require("jsonwebtoken");
const User = require("./user.model");
require("dotenv").config();

const adminSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    //Find the account
    const account = await User.findOne({ username: username });
    // Check if the account exists
    if (!account) return res.status(403).send({ message: "User not exist" });
    if (!(account.password === password))
      return res.status(403).send({ message: "The password is incorrect" });

    //Create token for user
    const token = jwt.sign(
      { username, password },
      process.env.TOKEN_SECRECT_KEY,
      { expiresIn: "30s" }
    );

    return res
      .status(200)
      .send({ message: "Login successful", token, account });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to login" }, error);
  }
};

module.exports = { adminSignIn };
