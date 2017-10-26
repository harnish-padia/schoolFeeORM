var db=require("./db");
var screen=require('./screen');
var userRepo=require('./user-repo');
var passwordhash=require('password-hash');
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

userRepo.getAllUsers()
.then(function(rows)
{
    return screen.write(rows,"json");   
}).catch(function(err)
{
    return screen.write(err);
}).finally(function()
{
    db.destroy();
})