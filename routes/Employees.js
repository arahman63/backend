/** @format */

const express = require("express");
const router = express.Router();

// const db = require("../config/database");
// const Employee = require("../models/Employees");
// const Employees = require("../models/Employees");
const { Task, Employee } = require("../database/models");

const ash = require("express-async-handler");

//get all employees
//reports to /employees route
/** GET ALL EMPLOYEES */
router.get(
  "/",
  ash(async (req, res) => {
    let employees = await Employee.findAll({ include: [Task] });
    res.status(200).json(employees);
  })
);

/** GET EMPLOYEE BY ID*/
router.get(
  "/:id",
  ash(async (req, res) => {
    let employee = await Employee.findByPk(req.params.id, { include: [Task] });
    res.status(200).json(employee);
  })
);

// Delete employee
router.delete(
  "/:id",
  ash(async (req, res) => {
    await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Employee deleted");
  })
);

// Add new employee
router.post(
  "/",
  ash(async (req, res) => {
    let newEmployee = await Employee.create(req.body);
    res.status(200).json(newEmployee);
  })
);

// Edit employee
router.put(
  "/:id",
  ash(async (req, res) => {
    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    let employee = await Employee.findByPk(req.params.id, { include: [Task] });
    res.status(201).json(employee);
  })
);

module.exports = router;
