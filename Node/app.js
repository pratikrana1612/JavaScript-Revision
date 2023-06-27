const express = require("express");
const bodyPraser = require("body-parser");


const locationRoutes = require("./routes/location");
const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

app.use(bodyPraser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next()
});
app.use(locationRoutes);
// app.use((req, res, next) => {
//   res.setHeader("Content-Type", "text/html");
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || "not defined";
//   res.render("index", {
//     user: userName,
//   });
//   res.send(
//     `<h1>Hi ${userName}</h1><form method='POST' action='/'><input name='username' type='text'><button type='submit'>Submit</button></form>`
//   );
// });

app.listen(3000);
