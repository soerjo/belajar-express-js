exports.createUser = (req, res, next) => {
  res.json({
    name: "soerjo hasto",
    email: "ryohastomo@gmail.com",
  });
  next();
};

exports.getAllUsers = (req, res, next) => {
  res.json({
    message: "get all product succes",
    data: {
      name: "ryohastomo",
      email: "ryohastomo@gmail.com",
      user_id: "01",
    },
  });
};
