/** @format */
const Sequelize = require("sequelize");
const db = require("../config/database");

const Employee = db.define("employees", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Employee;
