const express = require("express");
const URL = require("../models/url"); // ✅ update this path to your actual model location


const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({})
  return res.render("home", {
    urls: allurls,
  });
});

module.exports = router;
