const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  // code here
});

// GET /gallery
router.get("/", (req, res) => {
  const text = `
    SELECT * FROM "gallery";
  `;
  pool
    .query(text)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.error("GET /items error:", dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
