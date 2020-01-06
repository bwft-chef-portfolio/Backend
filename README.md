Backend API





|Request|Endpoint|Action|Expected Input|Output|Token Required?|
|----------|----------|----------|----------|----------|----------|
|Post|/api/register|creating an account|{username: "username"(required and unique), password: "password"(required), email: "email", first_name: "a name", last_name: "a name", phone: "123-443-4231", location: "location"}| new user and id | no |
|Post|/api/login| logging in | {username: "username"(required), password: "password"(required) | Token and welcome message | no |
