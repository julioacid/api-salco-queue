import { env } from './index';

const config = {
  production: {
    secret_key: process.env.SECRET_KEY,
    jwt_key: process.env.JWT_KEY
  },
  development: {
    secret_key: '6eXNuVVICiSIqsXJs6WpRxj7hSarM2J7',
    jwt_key: '23FyASa4EbrY3o1T'
  }
};

export default config[env];
