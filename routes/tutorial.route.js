const express = require("express");
const router = express.Router();
const tutorials = require("../controllers/tutorial.controller");

router.post("/", tutorials.insertData);
router.get("/", tutorials.getAll);
// router.delete("/", tutorials.removeAll);
router.get("/published", tutorials.getAllPublished);
router.get("/:id", tutorials.getById);
router.put("/:id", tutorials.updateData);
// router.delete("/:id", tutorials.remove);

module.exports = router;
