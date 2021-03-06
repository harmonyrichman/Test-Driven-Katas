const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../db");
const postList = require("../views/postList");
const postDetails = require("../views/postDetails");
const addPost = require('../views/addPost')

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query('SELECT * FROM users INNER JOIN posts ON posts.userid =users.id');
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});
router.get("/add", (req, res) => {
  console.log('add');
  res.send(addPost());
});

router.get("/:id", async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM users INNER JOIN posts ON posts.userid =users.id');
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) { next(error) }
});



module.exports = router;

