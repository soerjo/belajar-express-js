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

exports.getBlog = (req, res, next) => {
  BlogPost.find()
    .then((response) => {
      res.status(200).json({
        message: "data berhasil terpanggil",
        data: response,
      });
    })
    .catch((err) => next(err));
};

exports.getBlogById = (req, res, next) => {
  //   console.log("isi req.param:", req.params.postId);
  const { postId } = req.params;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        console.log(result);
        const err = new Error(`blog dengan id ${postId}, tidak ditemukan`);
        err.errorStatus = 404;
        throw err;
      }
      res.status(200).json({
        message: `blog dengan id ${postId} di temukan`,
        data: result,
      });
    })
    .catch((err) => next(err));
};
