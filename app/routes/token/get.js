import { sign } from 'jsonwebtoken';
import { response } from 'app/config';
import { jwt_key } from 'app/config/globals';

export default async (req, res, next) => {
  try {
    const token = sign({}, jwt_key);
    const result = {
      ...response,
      data: token
    };

    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};
