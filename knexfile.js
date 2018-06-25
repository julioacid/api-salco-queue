// Update with your config settings.
import db from 'app/config/db';

module.exports = {


  development: {
    client: 'postgres',
    connection: {
      host : db.host,
      user : 'postgres',
      password : '123456',
      database : 'salcobrand_development'
    },
    migrations: {
      directory:'./knex/migrations'
    }
  },

  staging: {
    client: 'postgres',
    connection: {
      host: db.host,
      user : db.username,
      password : db.password,
      database : db.database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      host: db.host,
      user: db.username,
      password : db.password,
      database : db.database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};