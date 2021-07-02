const db = require("../models");
const Product = db.PaymentProduct
const Op = db.Sequelize.Op;

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const code = req.query.code;
    var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;

    Product.findAll({attributes: ['code', 'payment_name','accept_part_payment','currency','cot','deadline','usage_instruction']},{ where: condition })
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

// Find a single Tutorial with an id
exports.findOne = (req, res, next) => {
    const  id= req.query.id;


    Product.findOne({attributes: ['code', 'payment_name','accept_part_payment','currency','cot','deadline','usage_instruction']},{where: id}
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