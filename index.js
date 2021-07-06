const express = require("express");
const app = express();
const userRoutes = require("./src/routes/users");
const port = 8000;

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
