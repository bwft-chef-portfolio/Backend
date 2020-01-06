exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'chefman', password: 'test', email: 'chefman@gmail.com',first_name:'Joe', last_name: 'Smith', phone:'789-333-2362', location:'New York'},
        {username: 'BestChefNA', password: 'test', email: 'BestChef@gmail.com',first_name:'Bob', last_name: 'Robin', phone:'789-323-1234', location:'New York'},
        {username: 'HungryChef', password: 'test', email: 'HungryChef@gmail.com',first_name: 'Steve', last_name: 'Shaw', phone:'789-543-5432', location:'Virginia'}
        
      ]);
    });
};
