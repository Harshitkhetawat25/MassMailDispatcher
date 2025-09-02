const express = require("express");
const isAuth = require("../middleware/isAuth");
const MailLog = require("../model/mailLogModel");
const router = express.Router();

router.get("/logs", isAuth, async (req, res) => {
  try {
    const logs = await MailLog.find({ user: req.user.id }).sort({ sentAt: -1 });
    res.json({ success: true, logs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch logs" });
  }
});

module.exports = router;