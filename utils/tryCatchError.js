const response = require("./index");

const tryCatchError = (res, error) => {
  console.error(error);
  console.log(error.message);
  return response(res, 500, { message: "Internal Server Error" });
};
module.exports = tryCatchError;
