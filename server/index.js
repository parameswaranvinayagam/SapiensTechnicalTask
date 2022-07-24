const express = require("express");
const app = express();
const mongose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");
app.use(express.json());
app.use(cors());

mongose.connect(
  "mongodb+srv://mongoDB:passwordTech@cluster0.rjjzp.mongodb.net/tpmdb?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(8001, () => {
  console.log("server is running");
});
