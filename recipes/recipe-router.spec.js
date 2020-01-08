const request = require("supertest")

const server = require("../api/server")




describe("server.js", function() {
   
   
   //recipes get test
    it('getting list of recipes', function () {
        return request(server)
        .get('/api/recipes')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
    it('check wrong path' , function() {
        return request(server)
        .get(`/api/recipess`)
        .then(res =>  {
            expect(res.status).toBe(404)
        })
    })

    //All recipes for  id test

    it('get no access test', function () {
        return request(server)
        .get('/api/recipes/1')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })

    it(`trying to get recipe data`, function () {
        const user = { username: "test", password: "test"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .get("/api/recipes/1")
                    .set("Authorization", token)
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
            })
    })


    // one recipe 

    it('get no access test', function () {
        return request(server)
        .get('/api/recipes/1/recipe')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })

    it(`trying to get recipe data`, function () {
        const user = { username: "test", password: "test"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .get("/api/recipes/1/recipe")
                    .set("Authorization", token)
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
            })
    })

    // filter by type

    it('getting list of recipes', function () {
        return request(server)
        .get('/api/recipes/type/:type')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })

    // filter by username

    it('getting list of recipes', function () {
        return request(server)
        .get('/api/recipes/username/username')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
   
    //filter by title

    it('getting list of recipes', function () {
        return request(server)
        .get('/api/recipes/title/:title')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })

    //filter by ingredients

    it('getting list of recipes', function () {
        return request(server)
        .get('/api/recipes/ingredients/:ingredients')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
  


    // posting a recipe

    it('get no access test', function () {
        return request(server)
        .post('/api/recipes/')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })

    it('posting new recipe', function() {
        const user = { username: "test", password: "test"}
        const data = { user_id: 1, type:"dinner", title: 'hotdog', ingredients: 'buns, hotdog', instructions: "cook hot dog in water"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .post("/api/recipes")
                    .set("Authorization", token)
                    .send(data)
                    .then(res => {
                        expect(res.status).toBe(201)
                    })
                })

    })
    it('posting new recipe without all fields', function() {
        const user = { username: "test", password: "test"}
        const data = { user_id: 1, title: 'hotdog', ingredients: 'buns, hotdog', instructions: "cook hot dog in water"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .post("/api/recipes")
                    .set("Authorization", token)
                    .send(data)
                    .then(res => {
                        expect(res.status).toBe(500)
                    })
                })

    })

    // updating a recipe
    it('get no access test', function () {
        return request(server)
        .put('/api/recipes/6')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })

    it('editing a recipe', function() {
        const user = { username: "test", password: "test"}
        const data = { user_id: 1, type:"dinner", title: 'corndog', ingredients: 'buns, hotdog', instructions: "cook hot dog in water"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .put("/api/recipes/6")
                    .set("Authorization", token)
                    .send(data)
                    .then(res => {
                        expect(res.status).toBe(201)
                    })
                })

    })
   
    // deleting a recipe 

    it('get no access test', function () {
        return request(server)
        .delete('/api/recipes/6')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })

    it(`deleting item`, function () {
        const user = { username: "test", password: "test"}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .delete("/api/recipes/6")
                    .set("Authorization", token)
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
            })
    })


})  