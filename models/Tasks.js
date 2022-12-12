/** @format */
const Sequelize = require("sequelize");
const db = require("../config/database");

const Task = db.define("tasks", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priority_level: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completion_status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  task_id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Task;
