const express = require("express");
const app = express();
const userRoutes = require("./src/routes/users");
const port = 8000;

//jd ini gunanya untuk bisa request dari browser biar ndak error diluar dari url local
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTION"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/v1/customer", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
