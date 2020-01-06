Backend API





|Request|Endpoint|Action|Expected Input|Output|Token Required?|
|----------|----------|----------|----------|----------|----------|
|POST|/api/auth/register|creating an account|{ username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"}| new user and id | no |
|POST|/api/auth/login| logging in | { username: "username"(required), password: "password"(required) | Token and welcome message | no |
| GET | /api/users/:id | getting a user | none | array for one user | yes |
| PUT | /api/users/:id | updating user information | { username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"} | array with updated information | yes |
| GET | /api/recipes | getting all recipes from all chefs | none | array of all recipes | no |
| GET | /api/recipes/:id | getting all recipes from one chef | none | array of all recipes for one chef | yes |
| POST | /api/recipes | creating a recipe | { type : "Breakfast/Lunch/Dinner/Snack" (required), img_url: "an img url with .jpg at the end of it", title: "a title" (required), description: "description, ingredients: "ingredients" (required), instructions: "instructions" (required) } | id of new recipe | yes |
