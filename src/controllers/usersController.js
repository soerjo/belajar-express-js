exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log("isi req: ", req);
  res.json({
    message: "create user success",
    data: {
      name: name,
      email: email,
    },
  });
  next();
};

exports.getAllUsers = (req, res, next) => {
  res.json({
    message: "get all product success",
    data: {
      name: "ryohastomo",
      email: "ryohastomo@gmail.com",
      user_id: "01",
    },
  });
};
