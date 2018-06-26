import { response } from 'app/config';
const knex = require('../../knex');

export default async (req, res, next) => {
  try {
    var data;
	    if (Array.isArray(req.body)) {	    	
				await knex.transaction(function(trx) {

					var locals = req.body.map(function(local) {
						return  {
						  ...local,
						  last_update: new Date(),
						  created_at: new Date()
						};
					});

				  knex.insert(locals)
				    .into('local')
				    .transacting(trx)
				    .then(function(ids) {
				      return locals.map(function(local) {
				      	 // Some validation could take place here.
				        return knex.insert(local).into('local').transacting(trx);
				      });
				    })
				    .then(trx.commit)
				    .catch(trx.rollback);
				})
				.then(function(inserts) {
					data = `${inserts.length}  new locals saved.`
				  console.log(inserts.length + ' new locals saved.');
				})
				.catch(function(error) {
				  console.error(error);
				});
			}else{
				 throw "Request Body is not an array!";
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
