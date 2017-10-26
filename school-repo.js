"use strict";

var Promise = require("bluebird");
var db = require("./db");
var screen = require('./screen');

//All function returns bluebird promise for their result

module.exports = {
    //=============================== INSERT ====================================//
    //Add school with passed parameter
    // Created by Harnish
    add: function (school) {

        return db.transaction(function (trx) {
            return trx
                .insert(school, 'Id').into("mstschool")
                .then(function (id) {
                    return id[0]; //Return institute's ID
                })
        });
    },

    //=============================== UPDATE ====================================//
    // Updates school information with provided object
    // Created by Harnish
    updateSchool: function (school) {
        var id = school.Id;
        delete school.Id;

        return db.transaction(function (trx) {
            return trx("mstschool")
                .where("Id", id).update(school);
        });
    },

    //=============================== Delete -> Update ====================================//
    // Delete school i.e. update its IsDelete to 1
    // Created by Harnish
    delete: function (schoolID) {
        return db('mstschool')
            .where('Id', schoolID)
            .update({
                IsDelete: 1,
            })
            .then();
    },

    //=============================== LISTS ====================================//
    //Lists all active school with institute
    // Created by Harnish
    listAllSchoolsAndInstitute: function () {
        return db("mstschool as s")
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