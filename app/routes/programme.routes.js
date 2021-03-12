module.exports = app => {
    const programmes = require("../controllers/Programme.controller");

    let router = require("express").Router();

    // show all students
    router.get("/", programmes.findAll);



    app.use('/api/v1/programme', router);

};
