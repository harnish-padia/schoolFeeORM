// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: { host : '192.168.101.22',user : 'root',password : 'root', database : 'schoolfee_db'},
    //migrations: { tableName: 'knex_migrations' },
    seeds:      { directory: './seeds'},
    debug: true     
  },
  production: {
    client: "mysql",
    connection: { host : '127.0.0.1',user : 'root',password : 'root', database : 'movie_production'},
    //migrations: { tableName: 'knex_migrations' },
    seeds:      { directory: './seeds'}     
  }

};
