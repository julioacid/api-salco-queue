export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  response: {
    status: 200,
    error: false,
    errorMessage: '',
    data: null
  }
};
