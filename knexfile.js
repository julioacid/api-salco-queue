// Update with your config settings.

module.exports = {


  development: {
    client: 'postgres',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '123456',
      database : 'salcobrand_development'
    },
    migrations: {
      directory:'./knex/migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory:'./knex/migrations'
    }
  }

};