exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'chiefman', password: 'test', email: 'chiefman@gmail.com',first_name:'Joe', last_name: 'Smith', phone:'789-333-2362', location:'New York'},
        {username: 'BestChiefNA', password: 'test', email: 'BestChief@gmail.com',first_name:'Bob', last_name: 'Robin', phone:'789-323-1234', location:'New York'},
        {username: 'HungryChief', password: 'test', email: 'HungryChief@gmail.com',first_name: 'Steve', last_name: 'Shaw', phone:'789-543-5432', location:'Virginia'}
        
      ]);
    });
};
