const express = require("express");
const router = express.Router();
const userControler = require("../controllers/users");

//CREATE
router.post("/users", userControler.createUser);

//READ
router.get("/users", userControler.getAllUsers);

//UPDATE
router.put("/users", (req, res, next) => {
  res.json({
    name: "soerjo hasto",
    email: "ryohastomo@gmail.com",
  });
  next();
});
//DELETE
router.delete("/users", (req, res, next) => {
  res.json({
    name: "soerjo hasto",
    email: "ryohastomo@gmail.com",
  });
  next();
});

module.exports = router;
