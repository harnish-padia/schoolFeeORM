var db = require("./db");
var screen = require('./screen');
var userRepo = require('./user-repo');
var passwordhash = require('password-hash');

// var iRepo = require('./institute-repo');
// var sRepo = require('./school-repo');
// var studRepo = require('./student-repo');
var categoryRepo = require('./category-repo');

screen.clear();

// var paging=3 ;
// var limit=10;
// db.select("roleId").from("role_").orderBy("roleId").limit(limit).offset(limit*(paging-1))
// userRepo.getUserByUserName('SuperAdmin')
// .then(function(rows)
// {
//     if(passwordhash.verify('espl@123',rows[0].Password))    {

//         userRepo.updateLastLogin(rows[0].Id).then(function(result)
//         {
//             return screen.write(result,"preety"); 
//         })
//     }
//     return screen.write(rows,"json");   
// }).catch(function(err)
// {
//     return screen.write(err);
// }).finally(function()
// {
//     db.destroy();
// })

var category = {
    Id:1,
    SchoolId:17,
    CategoryName:"OBC",
    CategoryDescription:"This is SCST category",
    // CreatedBy:"1",
};

categoryRepo.listAllCategory()
    .then(function (result) {
        return screen.write(result, "pretty");
    }).catch(function (err) {
        return screen.write(err);
    }).finally(function () {
        db.destroy();
    });