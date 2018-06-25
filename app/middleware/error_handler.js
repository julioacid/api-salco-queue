import { response } from 'app/config';

export default function(app) {
  app.use((err, req, res, next) => {
    if (err.status === 404) return next();

    const result = {
      ...response,
      status: err.status || 500,
      error: true,
      errorMessage: err.status === 400 ? err.message : 'internal error',
    };

    return res.status(err.status || 500).send(result);
  });

  app.use((req, res, next) => {
    res.status(404);
    res.send({
      data: null,
      status: 404,
      error: false,
      errorMessage: 'not found',
    });
  });
}
