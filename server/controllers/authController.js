const jwt = require("jsonwebtoken");

const Credential = require("../models/credentials");
const User = require("../models/users");
const config = require("../config/databaseCredentials.json");

const register = (req, res) => {
  let user = {};

  // console.log(req.body);

  user.email = req.body.email;
  user.password = req.body.password;
  user.type = req.body.type;

  Credential.create({
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
  })
    .then((result) => {
      // from here create user in database then respond with success
      User.create({
        firstName: req.body.firstName,
        surname: req.body.surname,
        sex: req.body.sex,
        phone: req.body.phone,
        dob: req.body.dob,
        uid: result.id,
      })
        .then((user) => {
          res.status(201);
          res.send({
            success: true,
            message: "Signed up successfully!",
          });
        })
        .catch((err) => {
          res.json({
            success: false,
            message: "User not created",
          });
        });
    })
    .catch((err) => {
      // err.errors.map(e => console.log(e.message))
      res.status(400);
      res.send({
        success: false,
        message: "Email must be unique!",
      });
    });
};

const login = (req, res) => {
  let details = {};

  Credential.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((credential) => {
      if (!credential) {
        res.status(400);
        res.send({
          success: false,
          message: "invalid credentials!",
        });
      } else if (credential.validPassword(req.body.password)) {
        details.uid = credential.dataValues.id;
        details.email = credential.dataValues.email;
        details.password = credential.dataValues.password;
        details.type = credential.dataValues.type;

        // generate access token
        // generate refresh token
        let token = generateTokens(details);

        res.status(200);
        res.send({
          success: true,
          message: "Login successfully!",
          type: credential.type,
          tokens: {
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
          },
        });
      } else {
        // wrong passwrord
        res.status(401);
        res.send({
          success: false,
          message: "invalid credentials!",
        });
      }
    })
    .catch((err) => {
      res.status(401);
      res.send({
        success: false,
        message: "Login failed!",
      });
    });
};

const refresh = (req, res) => {
  let token = {};

  jwt.verify(
    res.locals.refreshToken,
    process.env.REFRESH_TOKEN_SECRET || config.REFRESH_TOKEN_SECRET,
    (err, user) => {
      if (err) {
        console.log(err);
        return null;
      }

      delete user["password"];
      delete user["iat"];
      delete user["exp"];

      token.accessToken = jwt.sign(
        user,
        process.env.ACCESS_TOKEN_SECRET || config.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "45m",
        }
      );
    }
  );

  if (token) {
    res.status(200);
    res.send({
      success: true,
      message: "Token refreshed Successfully!",
      accessToken: "Bearer " + token.accessToken,
    });
  } else {
    res.status(403);
    res.send({
      success: false,
      message: "Unauthorized access!",
    });
  }
};

function generateTokens(user) {
  let token = {};

  let refreshToken = jwt.sign(
    user,
    process.env.REFRESH_TOKEN_SECRET || config.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "30d",
    }
  );

  delete user["password"];

  let accessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET || config.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "45m",
    }
  );

  token.accessToken = "Bearer " + accessToken;
  token.refreshToken = "Bearer " + refreshToken;

  return token;
}

module.exports = {
  register,
  login,
  refresh,
};
