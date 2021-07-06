const express = require("express");
const router = express.Router();
const userControler = require("../controllers/users");

// CREATE --> POST: http://localhost:8000/v1/user
router.post("/user", userControler.createUser);

//READ --> GET: http://localhost:8000/v1/users
router.get("/users", userControler.getAllUsers);

module.exports = router;
