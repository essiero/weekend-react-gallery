const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET /gallery
router.get("/", (req, res) => {
  const text = `
    SELECT * FROM "gallery"
    ORDER BY "id";
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

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  let idOfItem = req.params.id;
  const sqlText = `
  UPDATE "gallery"
      SET "likes" = "likes" + 1
      WHERE "id" = $1;
  `
  const sqlValues = [idOfItem];

  pool
  .query(sqlText, sqlValues)
  .then((dbResult) => {
      res.sendStatus(200)
  })
  .catch((dbError) => {
      console.log('PUT /like/:id failed: ', dbError);
      res.sendStatus(500);
  })
});


module.exports = router;
