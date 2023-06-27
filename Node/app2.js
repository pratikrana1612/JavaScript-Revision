const express = require("express");
const bodyPraser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyPraser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || "not defined";
  res.render("index", {
    user: userName,
  });
  //   res.send(
  //     `<h1>Hi ${userName}</h1><form method='POST' action='/'><input name='username' type='text'><button type='submit'>Submit</button></form>`
  //   );
});

app.listen(3000);
