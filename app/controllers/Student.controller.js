const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { INDEXNO: { [Op.INDEXNO]: `%${title}%` } } : null;

    Student.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving students."
            });
        });
};

// Find a single Student with an id
exports.findOne = (req, res, next) => {
    const  id= req.query.id;


    Student.findOne({where: id}
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving student."
            })
        })
    )
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};