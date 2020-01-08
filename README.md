Backend API for Chef Portfolio

URL : https://backendchefls.herokuapp.com

example use https://backendchefls.herokuapp.com/api/recipes



|Request|Endpoint|Action|Expected Input|Output|Token Required?|
|----------|----------|----------|----------|----------|----------|
|POST|/api/auth/register|creating an account|{ username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"}| new user and id | no |
|POST|/api/auth/login| logging in | { username: "username"(required), password: "password"(required) | Token and welcome message | no |
| GET | /api/users/:id | getting a user | none | object for one user | yes |
| PUT | /api/users/:id | updating user information | { username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"} | object with updated information | yes |
| GET | /api/recipes | getting all recipes from all chefs | none | array of all recipes | no |
| GET | /api/recipes/:id | getting all recipes from one chef | make sure that ID is the user_id | array of all recipes for one chef | yes |
| GET | /api/recipes/:id/recipe | getting one recipe | none | returns one recipe| yes |
| POST | /api/recipes | creating a recipe | { user_id: "user_id" (required), type : "Breakfast/Lunch/Dinner/Snack" (required), img_url: "an img url with .jpg at the end of it", title: "a title" (required), description: "description, ingredients: "ingredients" (required), instructions: "instructions" (required) } | id of new recipe | yes |
| PUT | /api/recipes/:id | updating a recipe | { user_id: "user_id" , type : "Breakfast/Lunch/Dinner/Snack" , img_url: "an img url with .jpg at the end of it", title: "a title" , description: "description, ingredients: "ingredients" , instructions: "instructions" } | returns an object with updated information | yes |
| DELETE | /api/recipes/:id | deleting a recipe | none | deleted | yes |
| GET | /api/recipes/type/:type | filtering by type | none | array of all recipes of that type | no |
| GET | /api/recipes/username/:username | filtering by username | none | array of all recipes of that username | no |
| GET | /api/recipes/title/:title | filtering by title | none | array of all recipes of that title | no |
| GET | /api/recipes/ingredients/:ingredients | filtering by ingredients | none | array of all recipes of that ingredient | no |

