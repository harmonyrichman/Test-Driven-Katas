const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("../db");
const postList = require("../views/postList");
const postDetails = require("../views/postDetails");

router.get("/", async (req, res, next) => {
  try {
<<<<<<< HEAD
    const data = await client.query(`SELECT posts.*, counting.upvotes 
    FROM posts 
    INNER JOIN (SELECT postId, COUNT(*) as upvotes FROM upvotes GROUP BY postId) AS counting
    ON posts.id = counting.postId`);
=======
    const data = await client.query('SELECT * FROM users INNER JOIN posts ON posts.userid =users.id');
>>>>>>> d452c04029f1bc8ce7506f99f0fea40cfe968cc6
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/:id", async (req, res) => {
  try {
<<<<<<< HEAD
    const postId = req.params.id;
    const data = await client.query(`SELECT title, name, content FROM posts JOIN users ON users.id = userid  WHERE posts.id = ${postId}`);
    const [post] = data.rows;
=======
    const data = await client.query('SELECT * FROM users INNER JOIN posts ON posts.userid =users.id');
    const post = data.rows[0];
>>>>>>> d452c04029f1bc8ce7506f99f0fea40cfe968cc6
    res.send(postDetails(post));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
    console.log('add');
    res.send(addPost());
  });


module.exports = router;

