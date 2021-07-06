exports.createUser = (req, res, next) => {
  res.json({
    message: "create user success",
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
