
exports.up = function(knex, Promise) {
  	knex.schema.hasTable('local').then(function(exists) {
	  if (!exists) {
	    return knex.schema.createTable('local', function(t) {
				t.increments('id').primary().notNullable();
				t.string('name', 100).notNullable();
				t.string('address', 300).notNullable();
				t.string('code', 50).notNullable();
				t.timestamp('queue_time').notNullable();
				t.integer('amount_of_person').notNullable();
				t.dateTime('last_update').notNullable();
				t.dateTime('created_at').notNullable();
	    });
	  }
	});
};

exports.down = function(knex, Promise) {
  
};
