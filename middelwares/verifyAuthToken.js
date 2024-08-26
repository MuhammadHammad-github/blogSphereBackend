const SECRET_PHASE = process.env.SECRET_PHASE;
const verifyAuthToken = (req, res, next) => {
  try {
    const authToken = req.headers["authToken"];
    if (!authToken) {
      return response(res, 401, { message: "Authorization token missing!" });
    }

    jwt.verify(authToken, SECRET_PHASE, (err, decoded) => {
      if (err) {
        return response(res, 401, { message: "Invalid or expired token!" });
      }

      req.id = decoded.id;
      next();
    });
  } catch (error) {
    return tryCatchError(res, error);
  }
};
module.exports = verifyAuthToken;
