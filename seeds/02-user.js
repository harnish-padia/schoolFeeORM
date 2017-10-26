exports.seed = function (knex, Promise) {
  var passwordhash=require('password-hash');
  var tblName = 'mstuser'
  var rows =
    [
      { RoleId: 1, UserName: 'SuperAdmin', Password:passwordhash.generate('espl@123'), CreatedBy: 'System' },
      { RoleId: 2, UserName: 'SchoolAdminUser', Password:passwordhash.generate('espl@123'), CreatedBy: 'System' },
     
    ];


  return knex(tblName)
    .del()                                            // Deletes ALL existing entries
    .then(function () 
    {
      return knex(tblName).insert(rows);              //Insesrt new rows
    });
};