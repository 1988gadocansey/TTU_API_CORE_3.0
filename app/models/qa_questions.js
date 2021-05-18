const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QAquestions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "auto count"
    },
    comprehensive_outline: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    outline_based_on_sylla: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    outline_recommended_books: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lecturer_person_details: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    course_objective_spelt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    course_material_list: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    class_start_week: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    class_met_regularly: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lecturer_punctual: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lecturer_missed_reason: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lecturer_stays_period: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    demonstrate_knowledge: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    well_organised_delivery: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    communicate_effectively: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    class_time_prom_learn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    varying_teaching_meth: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    encourage_stud_participation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    encourage_problem_solving: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    respond_to_stud_concerns: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    other_media_delivery: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    room_for_question: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    adequate_assignment: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state_feedback_time: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mark_assignment: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    discuss_in_class: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    stud_progress_concern: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    stud_responsibility: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deadline_assignment: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disclose_marks: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    late_submission_policy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    variety_assignment_used: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    course_objective_achieved: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    expectations_communicated: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sold_handout: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_friendly_atmosphere: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    indexno: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lecturer: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    lecturer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    course: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    coursecode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    academic_year: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    semester: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    date_of_entry: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'QAquestions',
    timestamps: false,
    indexes: [

      {
        name: "indexno",
        using: "BTREE",
        fields: [
          { name: "indexno" },
          { name: "lecturer" },
        ]
      },
    ]
  });
};
