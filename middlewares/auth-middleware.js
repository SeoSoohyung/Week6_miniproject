const jwt = require("jsonwebtoken");
const { Members } = require("../models");
const bcrypt = require("bcrypt");
const SECRETKEY = "week6-mini-project";

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({ errorMessage: "로그인 후 이용 가능한 기능입니다." });
    return;
  }

  try {
    const { userId } = jwt.verify(authToken, SECRETKEY);

    Members.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    res.status(401).send({ errorMessage: "로그인이 필요합니다." });
  }
};
