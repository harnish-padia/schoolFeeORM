"use strict";

var Promise = require("bluebird");
var db = require("./db");
var screen = require('./screen');

//All function returns bluebird promise for their result

// IMPORTANT : Please do not consider this as final
// Need to make changes to it after adding mstcategory

module.exports = {
    //=============================== INSERT ====================================//
    //Add school with passed parameter
    // Created by Harnish
    add: function (student) {

        return db.transaction(function (trx) {
            return trx
                .insert(student, 'Id').into("mststudent")
                .then(function (id) {
                    return id[0]; //Return student's ID
                })
        });
    },

    //=============================== UPDATE ====================================//
    // Updates studnet information with provided object
    // Created by Harnish
    updateStudent: function (student) {
        var id = student.Id;
        delete student.Id;

        return db.transaction(function (trx) {
            return trx("mststudent")
                .where("Id", id).update(student);
        });
    },

    //=============================== Delete -> Update ====================================//
    // Delete student i.e. update its IsDelete to 1
    // Created by Harnish
    delete: function (studentID) {
        return db('mststudent')
            .where('Id', studentID)
            .update({
                IsDelete: 1,
            })
            .then();
    },

    //=============================== LISTS ====================================//
    //Lists all student of a school - school id should be passed as parameter
    // Created by Harnish
    listAllSchoolsAndInstitute: function (schoolId) {
        return db("mststudent as s")
            .select("s.*", "i.InstituteName")
            .join("mstinstitute as i", "s.InstituteId", "i.Id")
            .where("s.IsDelete", false)
            .then();
    },

    //Lists all schools of a particual institute, have to pass instituteId as parameter
    // Created by Harnish
    listInstituteSchool: function (instituteId) {
        return db("mstschool as s")
            .select("s.*", "i.InstituteName")
            .join("mstinstitute as i", "s.InstituteId", "i.Id")
            .where("s.IsDelete", false)
            .where("s.InstituteId", instituteId)
            .then();
    }
}