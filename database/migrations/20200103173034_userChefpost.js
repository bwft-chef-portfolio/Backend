
exports.up = function(knex) {
  
    return knex.schema
    
    .createTable('users', users => {
        users.increments();
    
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users
        .string('password', 255)
        .notNullable();

        users
        .string('email', 255)
       

        users
        .string('first_name', 255)

        users
        .string('last_name', 255)

        users
        .string('phone', 255)

        users
        .string('location', 255)
      })


      .createTable('recipe', recipe => {
        recipe.increments()

        recipe
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        recipe 
        .string('type', 255)
        .notNullable()

        recipe
        .string('img_url', 350)

        recipe
        .string('title', 255)
        .notNullable()

        recipe
        .string('description', 500)

        recipe
        .string('ingredients', 500)
        .notNullable()

        recipe
        .string('instructions')
        .notNullable()

      })


};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('recipe')
};
