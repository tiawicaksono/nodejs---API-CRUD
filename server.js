const express = require("express");
const app = express();
// const jwt = require("jsonwebtoken");
const tutorialRoute = require("./routes/tutorial.route");
const userRoute = require("./routes/user.route");
require("dotenv").config();

const port = process.env.PORT_SERVER;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/tutorial", tutorialRoute);
app.use("/api/v1/user", userRoute);

// app.listen(port);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
