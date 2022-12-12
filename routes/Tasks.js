/** @format */

const express = require("express");
const router = express.Router();

const db = require("../config/database");
const Tasks = require("../models/Tasks");

//reports to /tasks route
router.get("/", (req, res) =>
  Tasks.findAll()
    .then((tasks) => {
      console.log(tasks);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
