const Payment = require('../models').FeePayment
const payments = require("../controllers/Payment.controller");
let router = require("express").Router();


router.get('/',payments.findAll);

router.get('/:id',payments.findOne);

router.get('/indexno/:indexno',payments.findByIndexNo);

router.get('/transactionId/:transactionId',payments.getPaymentByTransactionId);

router.put('/update/:id', payments.update);

router.get('/delete/:id', payments.delete);

router.post('/create', payments.payFees);




module.exports = router;
