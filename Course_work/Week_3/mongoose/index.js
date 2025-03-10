const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://jaglanabhishek08:admin@speer-backend.ofjy3xn.mongodb.net/testDB_100x?retryWrites=true&w=majority&appName=Speer-backend",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

function userExists(username, password) {
    // should check in the database
  }

app.listen(3000,() => {
    console.log('Server running on port number 3000')
});