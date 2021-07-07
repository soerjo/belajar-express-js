const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const blogController = require("../controllers/blogController");

// POST : /v1/blog/post
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("input title tidak sesuai, min 5 karakter"),
    body("body")
      .isLength({ min: 10 })
      .withMessage("input body tidak sesuai, min 10 karakter"),
  ],
  blogController.createBlog
);

router.get("/posts", blogController.getBlog);
router.get("/post/:postId", blogController.getBlogById);

module.exports = router;
