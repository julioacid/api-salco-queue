import { response } from 'app/config';
const knex = require('../../knex');

export default async (req, res, next) => {
  try {
    //const db = await Promise.resolve(connection());
    //const Local = db.models.local;
    var data;
	    if (req.body) {
				await knex.transaction(function(trx) {

				var local = {
				  ...req.body,
				  last_update: new Date(),
				  created_at: new Date()
				};

				knex.insert(local)
			    .into('local')
			    .transacting(trx)
			    .then(function(ids) {
						return ids
			   }).then(trx.commit).catch(trx.rollback);
			}).then(function(inserts) {
				data = 'New Local Saved'
			  console.log('New Local saved.');
			}).catch(function(error) {
			  console.error(error);
			});
		}

    const result = {
      ...response,
      data
    };

    return res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};
