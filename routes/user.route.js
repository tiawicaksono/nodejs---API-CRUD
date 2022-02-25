const express = require("express");
const router = express.Router();
const users = require("../controllers/user.controller");
const { checkToken } = require("../middleware/token_validation");

router.post("/", checkToken, users.insertData);
router.get("/", users.getByEmail);
router.put("/:id", checkToken, users.updateData);
router.post("/login", users.loginUser);

module.exports = router;
