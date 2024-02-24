var express = require('express');
var router = express.Router();
var Student = require('../models/student.js');

// CREATE student
router.post('/', async (req, res, next) => {
  try {
    const { studentNumber, firstName, lastName, emailAddress } = req.body;
    const student = new Student({ studentNumber, firstName, lastName, emailAddress });
    await student.save();
    res.redirect('/students');
  } catch (error) {
    next(error);
  }
});

// READ students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.find();
    res.render('routes/students.js', { students });
  } catch (error) {
    next(error);
  }
});



module.exports = router;
