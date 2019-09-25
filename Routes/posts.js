const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../db");
const postList = require("../views/postList");
const postDetails = require("../views/postDetails");

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(`SELECT posts.*, counting.upvotes 
    FROM posts 
    INNER JOIN (SELECT postId, COUNT(*) as upvotes FROM upvotes GROUP BY postId) AS counting
    ON posts.id = counting.postId`);
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const data = await client.query(`SELECT title, name, content FROM posts JOIN users ON users.id = userid  WHERE posts.id = ${postId}`);
    const [post] = data.rows;
    res.send(postDetails(post));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
    res.send(addPost());
  });

  
module.exports = router;

