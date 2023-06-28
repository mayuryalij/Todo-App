const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;  
let db;

let connectionString = process.env.connectionString;   

app.use(cors());
app.use(express.json());

const router = express.Router();

router.route("/").get(function (req, res) {
  db.collection("user")
    .find()
    .toArray(function (err, items) {
      res.send(items);
    });
});

router.route("/add").post(function (req, res) {
  db.collection("user").insertOne(req.body, function (err, info) {
    res.json(info);
  });
});

router.route("/update/:id").put(function (req, res) {
  db.collection("user").findOneAndUpdate(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        fullname: req.body.fullname,
        address: req.body.address,
        ph_number: req.body.ph_number,
      },
    },
    function () {
      res.send("Success updated!");
    }
  );
});

router.route("/delete/:id").delete(function (req, res) {
  db.collection("user").deleteOne(
    { _id: new ObjectId(req.params.id) },
    function () {
      res.send("Successfully deleted!");  
    }
  );
});

app.use("/contactlist", router);

MongoClient.connect(
  connectionString,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Connection failed for some reason");
    }
    console.log("Connection established - All well");
    db = client.db("crud");
    app.listen(PORT, function () {
      console.log("Server is running on Port: " + PORT);
    });
  }
);
