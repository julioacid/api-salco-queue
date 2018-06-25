import { secret_key } from 'app/config/globals';
import { response } from 'app/config';

export default async (req, res, next) => {
  try {
    const key = req.headers['x-access-key'];

    if (secret_key !== key) {
      const result = {
        ...response,
        status: 401,
        error: true,
        errorMessage: 'Key Unauthorized '
      };

      return res.status(401).send(result);
    }

    next();
  } catch (err) {
    next(err);
  }
};
