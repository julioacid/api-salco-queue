import { env } from './index';

const config = {
  development: {
    client: 'postgres',
	  connection: {
	    host : '127.0.0.1',
	    user : 'postgres',
	    password : '123456',
	    database : 'salcobrand_development'
	  },
    migrations: {
      directory:'./knex/migrations'
    }
  } ,
  production: {
    client: 'postgres',
	  connection: process.env.DATABASE_URL,
    migrations: {
      directory:'./knex/migrations'
    }
  }
  // production: {
  //   client: 'postgres',
	 //  connection: {
	 //    host :  process.env.DB_HOST,
	 //    port: process.env.DB_PORT,
	 //    user : process.env.DB_USERNAME,
	 //    password : process.env.DB_PASSWORD,
	 //    database : process.env.DATABASE
	 //  },
  //   migrations: {
  //     directory:'./knex/migrations'
  //   }
  // }
};

export default config[env];
