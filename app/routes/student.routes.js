module.exports = app => {
    const students = require("../controllers/Student.controller");

    let router = require("express").Router();

    // show all students
    router.get("/", students.findAll);



    app.use('/api/v1/students', router);

};
