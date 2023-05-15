var express = require("express");
var router = express.Router();
const Message = require("../model/message");

router.get("/", async function (req, res, next) {
  try {
    const message = await Message.findAll();
    console.log("model => ", message);
    if (message.length > 0) {
      res.json(message);
    } else {
      res.json([{ id: 0, message: "Belum ada pesan apapun di dalam DB" }]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ooopss...ada yang salah" });
  }
});

module.exports = router;
