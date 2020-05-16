var express = require("express");
var app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.listen(3001, function () {
  console.log("Songs server started !");
});
