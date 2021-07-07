const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const port = 8000;

const app = express();

const userRoutes = require("./src/routes/usersRoute");
const authRoutes = require("./src/routes/authRoutes");
const blogRoutes = require("./src/routes/blogRoutes");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use("/v1/images", express.static(path.join(__dirname, "images")));

app.use(multer({ storage, fileFilter }).single("image"));

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/v1/customer", userRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((err, req, res, next) => {
  const status = err.errorStatus || 500;
  const message = err.message;
  const data = err.data;

  res.status(status).json({
    message,
    data,
  });
});

mongoose
  .connect(
    "mongodb+srv://soerjo:X86mlvMAZ63jgkVg@blog.htjjr.mongodb.net/blogDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log());
