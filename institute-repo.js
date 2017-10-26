"use strict";

var Promise = require("bluebird");
var db = require("./db");

//All function returns bluebird promise for their result

module.exports = {
    //=============================== INSERT ====================================//
    //Add institute
    // Created by Harnish
    add: function (institute) {

        return db.transaction(function (trx) {
            return trx
                .insert(institute, 'Id').into("mstinstitute")
                .then(function (id) {
                    return id[0]; //Return institute's ID
                })
        })
    },
    //=============================== SELECT ====================================//
    // Lists all active institute
    // Created by Harnish
    listAllInstitue: function () {
        return db.select("Id", "InstituteName")
            .where("IsDelete", false)
            .from("mstinstitute")
            .then();
    },

    //=============================== UPDATE ====================================//
    // Update Institute using the given Institute name
    // Created by Harnish
    updateInstitute: function (I) {
        return db.transaction(function (trx) {
            trx("mstinstitute")
                .where("Id", I.Id)
                .update(InstituteName, I.InstituteName)
                .then();
        });
    },

    //=============================== DELETE -> UPDATE ====================================//
    // Delete institute i.e. update its IsDelete to 1
    // Created by Harnish
    delete: function (instituteID) {
        return db('mstinstitute')
            .where('Id', instituteID)
            .update({
                IsDelete: 1,
            })
            .then();
    },
}