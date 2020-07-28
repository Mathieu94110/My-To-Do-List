const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const todoRoute = require('./routes/todo')
mongoose
  .connect(
    "mongodb+srv://me94110:Avdldlvdm94!@cluster0.msaiu.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


app.use("/images", express.static(path.join(__dirname, "images")));
app.use(bodyParser.json());

app.use("/api/todo", todoRoute);

module.exports = app;
