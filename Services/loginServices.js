const logintModel = require("../Module/loginModule");
require("../Config/dbConfig").connect();
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


/* module.exports.loginSe = async (body) => {
  try {
    let login = await logintModel.create(body);

    return login;
  } catch (e) {
    console.log(e.message);

    throw Error("Error while product not created");
  }
};
     */

module.exports.loginSe = async (data, callback) => {
  try {
    console.log("test 1", data);

    // const { email, password } = req.body;

    if (!(data.email && data.password)) {
      callback("empty");
    }
    var eml = data.email;
    var pw = data.password;
    console.log("test3", data, "hello passowr", data.password);
    const user = await logintModel.findOne({ email: eml });
    console.log("test2", user);
    console.log("hello", pw);

    if (user && (await bcrypt.compare(pw, user.password))) {
      const token1 = jwt.sign(
        { user_id: user._id, eml },
        process.env.TOKEN_KEY,
        {}
      );

      user.token = token1;
      await logintModel.updateOne(
        { email: data.email },
        { $set: { token: token1 } }
      );

      return callback(user);
      //res(user)
    }
    //res.status(400).send("Invalid Credentials");

    // };
  } catch (err) {
    console.log(err);
  }

  return callbcak(user);
};
