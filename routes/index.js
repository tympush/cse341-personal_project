const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
  res.send("Hello World!!!");
});

router.use("/weapons", require("./weapons"));
router.use("/enemies", require("./enemies"));

module.exports = router;