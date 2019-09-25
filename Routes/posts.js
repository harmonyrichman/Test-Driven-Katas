const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../db");
const postList = require("../views/postList");
const postDetails = require("../views/postDetails");

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(/*Omitted for brevity*/);
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await client.query(/*Omitted for brevity*/);
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) { next(error) }
});

module.exports = router;

