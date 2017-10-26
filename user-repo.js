"use strict";
var promise= require("bluebird");
var db = require("./db");
var passwordhash=require('password-hash');

//All function returns a bluebird promise for their results

module.exports = 
{
    getAllUsers: function()
    {
        return db('mstuser as u')
        .join('mstrole as r','u.RoleId','r.Id')
        .where('u.IsDelete',false,)
        .where('r.IsDelete',false,)
        .select('u.Id','u.UserName','u.RoleId','r.RoleName','r.RoleDescription')
    },
    getUserByUserName: function(userName)
    {
        
        return db('mstuser')
        .where('UserName', userName)
        .where('IsDelete',false)
        .where('IsActivate',true)
        .where('IsBlocked',false)
        .select('UserName','Password')
    },

    insertUser: function(user)
    {
        return db('mstuser')
        .returning('Id')
        .insert(
            {
              RoleId:user[0].RoleId,
              UserName:user[0].UserName,
              Password:passwordhash.generate(user[0].Password),
              Email:user[0].Email  
            })
    },
    updateLastLogin: function(id)
    {
        return db('mstuser')
        .update('LastLogin',new Date().toLocaleDateString()+' '+ new Date().toLocaleTimeString()).where('Id',id);
    },
    updateFailPasswordAttemptCount: function(id)
    {
        return db('mstuser')
        .where('Id',id)
        //.whereNot('FailPasswordAttemptCount',3)
        .select('FailPasswordAttemptCount')
        .then(function(count)
        {
            if(count<3)
            {
                db('mstuser')
                .where('Id',id)
                update('FailPasswordAttemptCount',count+1)
            }
            else
            {
                db('mstuser')
                .where('Id',id)
                update('IsBlocked',true)
            }
           
        })
        
    },


}