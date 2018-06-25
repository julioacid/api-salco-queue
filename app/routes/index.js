import verify_token from 'app/middleware/verify_token';
import verify_key from 'app/middleware/verify_key';
import token from './token';
import local from './local';

export default (app) => {
  app.all('*', verify_key);
  app.use('/token', token);
  app.all('*', verify_token);
  app.use('/local', local);
};
