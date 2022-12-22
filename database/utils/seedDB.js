/** @format */

const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Raman",
    lastname: "Kanan",
  });

  const dummyTask = await Task.create({
    description: "eating",
    prioritylevel: "low",
    completionstatus: "complete",
  });

  await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;
