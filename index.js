const express = require("express");
const app = express();
const port = 3200;

app.get("/roll", (req, res) => {
  nodice = req.query.nodice;
  nosides = req.query.nosides;
  res.send("Your number is " + diceroll(nodice, nosides));
});

app.get("/name/:login", (req, res) => {
  login = req.params.login;
  Name = req.query.name;
  password = req.query.password;
  if (login == "admin" && Name == "owner" && password == "123")
    res.send("hello owner");
  else 
    res.send("Your name is " + Name + " Your password is " + password);
});

app.listen(port, () => {
  console.log("Server running on http://localhost:3200");
});

function diceroll(nodice, nosides) {
  let total = 0;
  for (let i = 0; i < nodice; i++) {
    total += Math.floor(Math.random() * nosides) + 1;
  }
  return total;
}
