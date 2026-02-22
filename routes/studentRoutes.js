const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// Route to add student
router.post("/add", studentController.addStudent);

// Route to view students
router.get("/view", studentController.getStudents);

module.exports = router;
