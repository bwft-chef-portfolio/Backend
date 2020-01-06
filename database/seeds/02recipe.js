exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {user_id: 1, type: "Snack", img_url:'https://images.media-allrecipes.com/userphotos/720x405/1437162.jpg',title: 'Cake', ingredients: '1 cup sugar, 1/2 butter, 2 eggs, 2 cups of flour', instructions:'Step 1: Preheat oven to 350 and grease pan. Step 2: combine ingredients and mix them. Step 3: Bake for 30mins'},
        {user_id: 1, type: "Breakfast", img_url:'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg',title: 'Eggs', ingredients: '4 large eggs, 1/4 cup of milk, pinch of salt and pepper, 2tsp butter', instructions:'Step 1: beat eggs,milk, and salt. Step 2: add butter and cook the ingredients'},
        {user_id: 2, type: "Lunch", img_url:'https://www.tasteofhome.com/wp-content/uploads/0001/01/Cobb-Salad-Club-Sandwich_EXPS_THAM19_233459_B11_09_2b-696x696.jpg',title: 'Sandwich', ingredients: '2 slices of bread, 1 tsb butter, 2 slices of cheese, 3 slices of ham', instructions:'Step 1: toast bread with butter Step 2: build the sandwich'},
        {user_id: 3, type: "Dinner", img_url:'https://assets.epicurious.com/photos/5846f0cf874f18911e1de0c0/6:4/w_620%2Ch_413/Eel%20With%20Olives%2C%20Chiles%2C%20and%20Capers.jpg',title: 'Cooked Eel', ingredients: '2 pounds of eel,1 cup of dry red wine, salt to your taste', instructions:'Step 1: preheat the oven to 450 Step 2: add eel to a pan and pour the red wine over it Step 3: cook eel for 20 mins'}
                
      ]);
    });
};
