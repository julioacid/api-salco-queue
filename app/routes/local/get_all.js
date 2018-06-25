import { response } from 'app/config';

const knex = require('../../knex');

export default async (req, res, next) => {
  try {
    const locals = await knex.select().table('local');
    const filter = locals
      .sort((a, b) => b.last_update - a.last_update)
      .reduce(
        (a, b) => (a.findIndex((l) => l.code === b.code) < 0 ? [...a, b] : a),
        []
      );

    const result = {
      ...response,
      data: filter
    };

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
