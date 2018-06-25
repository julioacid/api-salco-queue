import { verify } from 'jsonwebtoken';
import { jwt_key } from 'app/config/globals';
import { response } from 'app/config';

export default async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    verify(token, jwt_key, (err, decoded) => {
      if (err) {
        const result = {
          ...response,
          status: 401,
          error: true,
          errorMessage: 'Token Unauthorized'
        };

        return res.status(401).send(result);
      }

      next();
    });
  } catch (err) {
    next(err);
  }
};
