
exports.seed = function (knex, Promise) {
  var tblName = 'mstrole'
  var rows =
    [
      { Rolename: 'SuperAdmin', RoleDescription: 'SuperAdmin', CreatedBy: 'System' },
      { Rolename: 'School1Admin', RoleDescription: 'Admin for School 1', CreatedBy: 'System' },
    ];


  return knex(tblName)
    .del()                                            // Deletes ALL existing entries
    .then(function () 
    {
      return knex(tblName).insert(rows);              //Insesrt new rows
    });
};
