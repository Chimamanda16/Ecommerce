const express = require("express");
const router = express.Router();

const homeRouter = require("./home.routes");

router.use("/", homeRouter);
module.exports = router;