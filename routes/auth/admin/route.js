const express = require("express");
const { tryCatchError } = require("../../../utils");
const route = express.Route();

route.get("/", (req, res) => {
  try {
  } catch (error) {
    return tryCatchError(res, error);
  }
});

module.exports = route;
