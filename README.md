Backend API





|Request|Endpoint|Action|Expected Input|Output|Token Required?|
|----------|----------|----------|----------|----------|----------|
|POST|/api/auth/register|creating an account|{ username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"}| new user and id | no |
|POST|/api/auth/login| logging in | { username: "username"(required), password: "password"(required) | Token and welcome message | no |
| GET | /api/recipes | get all recipes from all chefs | none | array of all recipes | no |