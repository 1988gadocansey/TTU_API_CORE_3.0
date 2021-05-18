var DataTypes = require("sequelize").DataTypes;
var _academicrecords = require("./academicrecords");
var _addresses = require("./addresses");
var _admission_list = require("./admission_list");
var _admissionletter = require("./admissionletter");
var _banks_others = require("./banks_others");
var _cand_gradedefinition = require("./cand_gradedefinition");
var _classparameters = require("./classparameters");
var _clearance = require("./clearance");
var _college = require("./college");
var _courses = require("./courses");
var _courses_settings = require("./courses_settings");
var _current_year_settings = require("./current_year_settings");
var _department = require("./department");
var _faculty = require("./faculty");
var _feedetails = require("./feedetails");
var _feesettings = require("./feesettings");
var _gradingsystem = require("./gradingsystem");
var _gradingsystem_classes = require("./gradingsystem_classes");
var _gradingsystem_scoring = require("./gradingsystem_scoring");
var _gradingsystem_scoringexception = require("./gradingsystem_scoringexception");
var _hallsofresidence = require("./hallsofresidence");
var _institution = require("./institution");
var _log = require("./log");
var _mastercourses = require("./mastercourses");
var _programme = require("./programme");
var _programme_options = require("./programme_options");
var _programs = require("./programs");
var _query1 = require("./query1");
var _receiptno = require("./receiptno");
var _religion = require("./religion");
var _reports = require("./reports");
var _stud_snapshot = require("./stud_snapshot");
var _students = require("./students");
var _students_excluded = require("./students_excluded");
var _tag = require("./tag");
var _tagstudents = require("./tagstudents");
var _tbl_academic_constraints = require("./tbl_academic_constraints");
var _tbl_academic_qualification = require("./tbl_academic_qualification");
var _tbl_account = require("./tbl_account");
var _tbl_admission_date = require("./tbl_admission_date");
var _tbl_admission_rules = require("./tbl_admission_rules");
var _tbl_assumptionofduty = require("./tbl_assumptionofduty");
var _tbl_biodata = require("./tbl_biodata");
var _tbl_biodata11 = require("./tbl_biodata11");
var _tbl_country = require("./tbl_country");
var _tbl_data = require("./tbl_data");
var _tbl_email_setting = require("./tbl_email_setting");
var _tbl_exams = require("./tbl_exams");
var _tbl_form_number = require("./tbl_form_number");
var _tbl_form_types = require("./tbl_form_types");
var _tbl_grades = require("./tbl_grades");
var _tbl_mature_qualifications = require("./tbl_mature_qualifications");
var _tbl_mode = require("./tbl_mode");
var _tbl_mode_application = require("./tbl_mode_application");
var _tbl_pictures = require("./tbl_pictures");
var _tbl_professional_qualification = require("./tbl_professional_qualification");
var _tbl_programs = require("./tbl_programs");
var _tbl_regions = require("./tbl_regions");
var _tbl_report_snapshot = require("./tbl_report_snapshot");
var _tbl_session = require("./tbl_session");
var _tbl_staffs = require("./tbl_staffs");
var _tbl_subjects = require("./tbl_subjects");
var _tbl_title = require("./tbl_title");
var _tbl_waec_exam_type = require("./tbl_waec_exam_type");
var _tbl_work_experience = require("./tbl_work_experience");
var _tbl_working_experience = require("./tbl_working_experience");
var _tbl_zones = require("./tbl_zones");
var _up_role_programmes = require("./up_role_programmes");
var _up_users = require("./up_users");
var _users = require("./users");
var _zenith = require("./zenith");

function initModels(sequelize) {
  var academicrecords = _academicrecords(sequelize, DataTypes);
  var addresses = _addresses(sequelize, DataTypes);
  var admission_list = _admission_list(sequelize, DataTypes);
  var admissionletter = _admissionletter(sequelize, DataTypes);
  var banks_others = _banks_others(sequelize, DataTypes);
  var cand_gradedefinition = _cand_gradedefinition(sequelize, DataTypes);
  var classparameters = _classparameters(sequelize, DataTypes);
  var clearance = _clearance(sequelize, DataTypes);
  var college = _college(sequelize, DataTypes);
  var courses = _courses(sequelize, DataTypes);
  var courses_settings = _courses_settings(sequelize, DataTypes);
  var current_year_settings = _current_year_settings(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var faculty = _faculty(sequelize, DataTypes);
  var feedetails = _feedetails(sequelize, DataTypes);
  var feesettings = _feesettings(sequelize, DataTypes);
  var gradingsystem = _gradingsystem(sequelize, DataTypes);
  var gradingsystem_classes = _gradingsystem_classes(sequelize, DataTypes);
  var gradingsystem_scoring = _gradingsystem_scoring(sequelize, DataTypes);
  var gradingsystem_scoringexception = _gradingsystem_scoringexception(sequelize, DataTypes);
  var hallsofresidence = _hallsofresidence(sequelize, DataTypes);
  var institution = _institution(sequelize, DataTypes);
  var log = _log(sequelize, DataTypes);
  var mastercourses = _mastercourses(sequelize, DataTypes);
  var programme = _programme(sequelize, DataTypes);
  var programme_options = _programme_options(sequelize, DataTypes);
  var programs = _programs(sequelize, DataTypes);
  var query1 = _query1(sequelize, DataTypes);
  var receiptno = _receiptno(sequelize, DataTypes);
  var religion = _religion(sequelize, DataTypes);
  var reports = _reports(sequelize, DataTypes);
  var stud_snapshot = _stud_snapshot(sequelize, DataTypes);
  var students = _students(sequelize, DataTypes);
  var students_excluded = _students_excluded(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var tagstudents = _tagstudents(sequelize, DataTypes);
  var tbl_academic_constraints = _tbl_academic_constraints(sequelize, DataTypes);
  var tbl_academic_qualification = _tbl_academic_qualification(sequelize, DataTypes);
  var tbl_account = _tbl_account(sequelize, DataTypes);
  var tbl_admission_date = _tbl_admission_date(sequelize, DataTypes);
  var tbl_admission_rules = _tbl_admission_rules(sequelize, DataTypes);
  var tbl_assumptionofduty = _tbl_assumptionofduty(sequelize, DataTypes);
  var tbl_biodata = _tbl_biodata(sequelize, DataTypes);
  var tbl_biodata11 = _tbl_biodata11(sequelize, DataTypes);
  var tbl_country = _tbl_country(sequelize, DataTypes);
  var tbl_data = _tbl_data(sequelize, DataTypes);
  var tbl_email_setting = _tbl_email_setting(sequelize, DataTypes);
  var tbl_exams = _tbl_exams(sequelize, DataTypes);
  var tbl_form_number = _tbl_form_number(sequelize, DataTypes);
  var tbl_form_types = _tbl_form_types(sequelize, DataTypes);
  var tbl_grades = _tbl_grades(sequelize, DataTypes);
  var tbl_mature_qualifications = _tbl_mature_qualifications(sequelize, DataTypes);
  var tbl_mode = _tbl_mode(sequelize, DataTypes);
  var tbl_mode_application = _tbl_mode_application(sequelize, DataTypes);
  var tbl_pictures = _tbl_pictures(sequelize, DataTypes);
  var tbl_professional_qualification = _tbl_professional_qualification(sequelize, DataTypes);
  var tbl_programs = _tbl_programs(sequelize, DataTypes);
  var tbl_regions = _tbl_regions(sequelize, DataTypes);
  var tbl_report_snapshot = _tbl_report_snapshot(sequelize, DataTypes);
  var tbl_session = _tbl_session(sequelize, DataTypes);
  var tbl_staffs = _tbl_staffs(sequelize, DataTypes);
  var tbl_subjects = _tbl_subjects(sequelize, DataTypes);
  var tbl_title = _tbl_title(sequelize, DataTypes);
  var tbl_waec_exam_type = _tbl_waec_exam_type(sequelize, DataTypes);
  var tbl_work_experience = _tbl_work_experience(sequelize, DataTypes);
  var tbl_working_experience = _tbl_working_experience(sequelize, DataTypes);
  var tbl_zones = _tbl_zones(sequelize, DataTypes);
  var up_role_programmes = _up_role_programmes(sequelize, DataTypes);
  var up_users = _up_users(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var zenith = _zenith(sequelize, DataTypes);


  return {
    academicrecords,
    addresses,
    admission_list,
    admissionletter,
    banks_others,
    cand_gradedefinition,
    classparameters,
    clearance,
    college,
    courses,
    courses_settings,
    current_year_settings,
    department,
    faculty,
    feedetails,
    feesettings,
    gradingsystem,
    gradingsystem_classes,
    gradingsystem_scoring,
    gradingsystem_scoringexception,
    hallsofresidence,
    institution,
    log,
    mastercourses,
    programme,
    programme_options,
    programs,
    query1,
    receiptno,
    religion,
    reports,
    stud_snapshot,
    students,
    students_excluded,
    tag,
    tagstudents,
    tbl_academic_constraints,
    tbl_academic_qualification,
    tbl_account,
    tbl_admission_date,
    tbl_admission_rules,
    tbl_assumptionofduty,
    tbl_biodata,
    tbl_biodata11,
    tbl_country,
    tbl_data,
    tbl_email_setting,
    tbl_exams,
    tbl_form_number,
    tbl_form_types,
    tbl_grades,
    tbl_mature_qualifications,
    tbl_mode,
    tbl_mode_application,
    tbl_pictures,
    tbl_professional_qualification,
    tbl_programs,
    tbl_regions,
    tbl_report_snapshot,
    tbl_session,
    tbl_staffs,
    tbl_subjects,
    tbl_title,
    tbl_waec_exam_type,
    tbl_work_experience,
    tbl_working_experience,
    tbl_zones,
    up_role_programmes,
    up_users,
    users,
    zenith,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
