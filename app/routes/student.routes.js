const Student = require('../models/student')
const students = require("../controllers/Student.controller");
let router = require("express").Router();

// show all students
router.get("/", students.findAll);
router.get("/id", students.findOne);

router.post('/', async (req, res) => {
    const savedStudent = new Student({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    middle_name: req.body.middle_name,
    dob: req.body.dob,
    gender: req.body.gender,
    title: req.body.title,
    admission_no: req.body.admission_no,
    index_no: req.body.index_no,
    marital_status: req.body.marital_status,
    phone: req.body.phone,
    alt_phone: req.body.alt_phone,
    room: req.body.room,
    hometown: req.body.hometown,
    emergency_contact: req.body.emergency_contact,
    email: req.body.STRING,
    residential_status: req.body.residential_status,
    guardian_name: req.body.guardian_name,
    guardian_relation: req.body.guardian_relation,
    guardian_occupation: req.body.guardian_occupation,
    guardian_phone: req.body.guardian_phone,
    disability: req.body.disability,
    disability_type: req.body.disability_type,
    hostel: req.body.hostel,
    postgprs: req.body.postgprs,
    date_admitted: req.body.DATE,
    level_admitted: req.body.STRING,
    credit_done: req.body.credit_done,
    credit_left: req.body.credit_left,
    year_admitted: req.body.year_admitted,
    graduation_year: req.body.graduation_year,
    liaison: req.body.liaison,
    ltr_assessment: req.body.ltr_assessment,
    registered: req.body.registered,
    bill:req.body.bill,
    paid:req.body.paid,
    owing:req.body.owing,
    trail:req.body.trail,
    suplementary:req.body.suplementary,
    combined_code:req.body.combined_code,
    matriculated:req.body.matriculated,
    nab:req.body.nab,
    protocol:req.body.protocol,
    scholarship:req.body.scholarship,
    admissions_data:req.body.admissions_data
    });
    try{
        const savedStudent = await this.post.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({ msg: err });
    }
})

    
module.exports = router