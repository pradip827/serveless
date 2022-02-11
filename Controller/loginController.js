const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginModule = require("../Module/loginModule");
const loginService = require("../Services/loginServices");
const responseHelper = require("../helper/responseHelper").responseHelper;

module.exports.register = async (req, res) => {
  try {
    const {
      name,
      dob,
      email,
      password,
      gender,
      CreatedAt,
      UpdatedAt,
      isActive,
    } = req.body;

    if (
      !(
        email &&
        password &&
        name &&
        dob &&
        dob &&
        CreatedAt &&
        UpdatedAt &&
        isActive &&
        gender
      )
    ) {
      res.status(400).send("All input is required");
    }

    const oldUser = await loginModule.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await loginModule.create({
      name,
      dob,
      CreatedAt,
      UpdatedAt,
      isActive,
      gender,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    /* const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {}
    );

    user.token = token; */

    responseHelper(res.status(200).json(user));
  } catch (err) {
    console.log(err);
  }
};

module.exports.login = async (req, res) => {
  try {
    const data = { email: req.body.email, password: req.body.password };

    if (!(data.email && data.password)) {
      res.status(400).send("All input is required");
    }
    /* 
    const user = await loginModule.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token

      const token1 = jwt.sign(
        {
          user_id: user._id,

          email,
        },
        process.env.TOKEN_KEY,

        {
          expiresIn: "2h",
        }
      );

      // save user token

      user.token = token1;

      await loginModule.updateOne({ email: email }, { $set: { token: token1 } });

      // user

      res.status(200).json(user);
    }

    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}; */

    console.log("service start");
    var a = await loginService.loginSe(data, (results, err) => {
      console.log("err", err, "result", results);
      if (err) {
        responseHelper(
          res.status(400).send({ success: 0, message: "invalid login" })
        );
      }
      return results;
    });
    responseHelper(res.status(400).send({ success: 1, data: a }));
  } catch (error) {
    responseHelper(res.status(403).send({ message: "bad" }));
  }
};
