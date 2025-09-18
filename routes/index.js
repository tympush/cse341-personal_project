const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
  res.send("Hello World!!!");
});

router.use("/weapons", require("./weapons"));

module.exports = router;