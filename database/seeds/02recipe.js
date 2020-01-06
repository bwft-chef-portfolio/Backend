exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {user_id: 1, type: "snack", title: 'test', ingredients: 'butter, salt, pepper', instructions:' do this and this and this and this'}

        
      ]);
    });
};
