/** @format */

const express = require("express");
const router = express.Router();

const db = require("../config/database");
const Employees = require("../models/Employees");

//reports to /employees route
router.get("/", (req, res) =>
  Employees.findAll()
    .then((employees) => {
      console.log(employees);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
