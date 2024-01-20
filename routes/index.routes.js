const express = require("express");
const router = express.Router();

const homeRouter = require("./home.routes");
const payRouter = require("./pay.routes");

router.use("/", homeRouter);
router.use("/", payRouter);

module.exports = router;