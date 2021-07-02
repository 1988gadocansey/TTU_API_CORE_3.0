const db = require("../models");
const Payment = db.FeePayment
const Bank = db.Bank
const Op = db.Sequelize.Op;

// Retrieve all Students from the database.
exports.findAll = (req, res) => {

    Payment.findAll({
            order: [
                ['ID', 'DESC'],
                ['TRANSDATE', 'DESC'],
            ],
            attributes: ['INDEXNO', 'PROGRAMME', 'LEVEL', 'AMOUNT', 'BANK_DATE', 'TRANSDATE', 'TRANSACTION_ID', 'RECEIPTNO', 'SEMESTER', 'YEAR']
        }
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving payments"
            });
        });
};

// Find a single Payment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Payment.findOne({
        order: [
            ['ID', 'DESC'],
        ],
        attributes: ['INDEXNO', 'PROGRAMME', 'LEVEL', 'AMOUNT', 'BANK_DATE', 'TRANSDATE', 'TRANSACTION_ID', 'RECEIPTNO', 'SEMESTER', 'YEAR'],

        where: {ID: id}

    }).then(data => {

        if (data.length > 0) {
            res.send("Unknown payment with Id " + id);
        } else {
            res.send(data);
        }
    })


};
exports.findByIndexNo = async (req, res) => {
    const indexno = req.params.indexno;

    Payment.findAll({
        order: [
            ['ID', 'DESC'],
        ],
        attributes: ['INDEXNO', 'PROGRAMME', 'LEVEL', 'AMOUNT', 'BANK_DATE', 'TRANSDATE', 'TRANSACTION_ID', 'RECEIPTNO', 'SEMESTER', 'YEAR'],
        where: {INDEXNO: indexno}

    }).then(data => {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.send("Unknown payment(s) for index no. " + indexno);
        }
    })
}

// Find a single Payment  with transactionId
exports.getPaymentByTransactionId = (req, res, next) => {
    const transactionId = req.params.transactionId;
    Payment.findAll({
        order: [
            ['ID', 'DESC'],
        ],
        attributes: ['INDEXNO', 'PROGRAMME', 'LEVEL', 'AMOUNT', 'BANK_DATE', 'TRANSDATE', 'TRANSACTION_ID', 'RECEIPTNO', 'SEMESTER', 'YEAR'],

        where: {TRANSACTION_ID: transactionId}

    }).then(data => {

        if (data.length > 0) {
            return res.send(data);
        } else {
            return res.status(404)
                .json({message: "Unknown payment with transaction id " + transactionId});
        }
    })
};

// Update a Fee Payment by the id or transaction id in the request
// Actually meant for correcting errors and reversals
exports.update = (req, res) => {

};

// Delete a Fee Payment with the specified id or transaction Id in the request
exports.delete = (req, res) => {

};


/**
 * @api {post} /api/v1/payments Create fee object
 * @apiParam  {String} [indexno] indexno
 * @apiParam  {Decimal} [amount] amount
 * @apiParam  {integer} [accountNumber] accountNumber
 * @apiParam  {String} [feeType] feeType
 * @apiParam  {String} [transactionId] transactionId
 * @apiParam  {Date} [transactionDate] transactionDate
 * @apiParam  {String} [auth] auth
 * @apiSuccess (200) {Object} mixed `fee payment` object
 */
exports.payFees = async (req, res, next) => {
    // year and sem and admit are from db table
    let year = "2021/2022"
    let semester = 1
    let admit = "2021/2022"
    let graduation = "2021/2022"

    let tokens = ["128ashbx393932", "1nm383ypmwd123"]

    // local variable to mutate the db values
    let yearlocal = null
    let semesterlocal = null
    let yearTry = null
    let status = null

    let {indexno, amount, accountNumber, feeType, transactionId, transactionDate, auth} = req.body
    if (indexno && amount && accountNumber && feeType && transactionId && transactionDate && auth) {

        if (indexno.substring(0, 4) === new Date().getFullYear()) {
            semesterlocal = 1
            yearlocal = admit
        } else {
            semesterlocal = semester
            yearlocal = year
        }

        if (feeType === "Hostel") {
            yearlocal = admit
        }
        yearTry = year.split('/');
        if (yearTry[0] < indexno.substring(0, 4)) {
            status = "Admitted"
        } else {
            status = "In school"
        }
        if (feeType === "AUF") {
            feeType = "School Fees";
        } else if (feeType.split(0, 4) === "Grad") {
            feeType = "Graduation Fees";
            yearlocal = graduation
        }

        if (tokens.find(element => element == auth)) {


            Bank.findOne({attributes: ['ID', 'NAME'], where: {ACCOUNT_NUMBER: accountNumber}}).then(data => {
                if (data) {

                    return res.status(200).json({
                        status: true, "responseMessage": "Payment successfully processed.",
                        "data": {"request": req.body,}
                    })

                } else {
                    return res.json({
                        status: false, 'responseMessage': 'Invalid bank account encountered.',
                        "data": {"request": req.body,}
                    });
                }
            })


        } else {
            return res.json({
                status: false, 'responseMessage': 'Invalid auth key',
                "data": {"request": req.body,}
            });
        }


    } else {
        return res.status(200).json({
            status: false, "responseMessage": "Params are required.",
            "data": {"request": req.body}
        })
    }

}
;