const { verify } = require("jsonwebtoken");
module.exports = {
  // FORMAT OF TOKEN
  // Authorization: Bearer <access_token>

  // Verify Token
  // function verifyToken(req, res, next) {
  //   // Get auth header value
  //   const bearerHeader = req.headers["authorization"];
  //   // Check if bearer is undefined
  //   if (typeof bearerHeader !== "undefined") {
  //     // Split at the space
  //     const bearer = bearerHeader.split(" ");
  //     // Get token from array
  //     const bearerToken = bearer[1];
  //     // Set the token
  //     req.token = bearerToken;
  //     // Next middleware
  //     next();
  //   } else {
  //     // Forbidden
  //     res.sendStatus(403);
  //   }
  // }
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    // console.log(token);
    if (token) {
      token = token.slice(7);
      //   console.log(token);
      verify(token, "qwe123", (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "access denied",
      });
    }
  },
};
