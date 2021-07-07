const { validationResult } = require("express-validator");
const BlogPost = require("../models/blogModel");

exports.createBlog = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    const error = new Error("input value tidak sesuai");
    error.errorStatus = 400;
    error.data = err.array();
    throw error;
  }

  if (!req.file) {
    const error = new Error("Image musti di upload");
    error.errorStatus = 422;
    throw error;
  }

  const image = req.file.path;
  const { title, body } = req.body;

  const Post = new BlogPost({
    title,
    body,
    image,
    author: {
      nama: "soerjo",
      uid: 1,
    },
  });

  Post.save()
    .then((response) => {
      res.status(201).json({
        message: "created blog success",
        data: response,
      });
    })
    .catch((err) => console.log(err));
};
