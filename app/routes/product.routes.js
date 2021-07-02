const Product = require('../models').PaymentProduct
const products = require("../controllers/Product.controller");
let router = require("express").Router();

// show all programmes
router.get('/',products.findAll);

router.post('/', async (req, res) =>{
    const savedProgramme = {
        name: req.body.name || '',
        slug: req.body.slug || '',
        code: req.body.code || '',
        duration: req.body.duration || '',
        min_credits: req.body.min_credits || '',
        max_credits: req.body.max_credits || '',
        type: req.body.type || '',
        result: req.body.result || '',
        hnd_code: req.body.hnd_code || '',
        combined_code: req.body.combined_code || '',
        combined_department: req.body.combined_department || '',
        session: req.body.session || '',
        show_on_portal: req.body.show_on_portal || '',
        running: req.body.running || '',

    }
    try{
        const result = await Product.create(savedProgramme);
        res.json(result);
    } catch (err) {
        console.log(err)
        res.json({ msg: err.message});
    }
});

module.exports = router;
