"use strict";

var Promise = require("bluebird");
var db = require("./db");
var screen = require('./screen');

//All function returns bluebird promise for their result

module.exports = {
    //=============================== INSERT ====================================//
    //Add category with passed parameter
    // Created by Harnish
    add: function (category) {

        return db.transaction(function (trx) {
            return trx
                .insert(category, 'Id').into("mstcategory")
                .then(function (id) {
                    return id[0]; //Return category's ID
                })
        });
    },

    //=============================== UPDATE ====================================//
    // Updates school information with provided object
    // Created by Harnish
    update: function (category) {
        var id = category.Id;
        delete category.Id;

        return db.transaction(function (trx) {
            return trx("mstcategory")
                .where("Id", id).update(category);
        });
    },

    //=============================== Delete -> Update ====================================//
    // Delete school i.e. update its IsDelete to 1
    // Created by Harnish
    delete: function (categoryID) {
        return db('mstcategory')
            .where('Id', categoryID)
            .update({
                IsDelete: 1,
            })
            .then();
    },

    //=============================== LISTS ====================================//
    //Lists all active category of a school
    // Created by Harnish
    listAllCategory: function () {
        return db("mstcategory as c")
            .select("c.*", "s.SchoolName")
            .join("mstschool as s", "s.Id", "c.SchoolId")
            .where("c.IsDelete", false)
            .then();
    },
}