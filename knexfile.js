// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'schoolfee_db',
      user: 'schooladmin',
      password: 'password',
      host: '192.168.101.22',
    },
    debug: true,
    acquireConnectionTimeout: 10000,
  },
  production: {
    client: "mysql",
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'movie_production'
    },
    //migrations: { tableName: 'knex_migrations' },
    seeds: {
      directory: './seeds'
    }
  }

};