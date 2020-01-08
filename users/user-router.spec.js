const request = require("supertest")

const server = require("../api/server")


describe("server.js", function() {

    it('get no access test', function () {
        return request(server)
        .put('/api/users/4')
        .then(res => {
            expect(res.status).toBe(401)
        })
    })
    it('editing a recipe', function() {
        const user = { username: "test", password: "test"}
        const data = { first_name: 'bob'}
        return request(server)
            .post('/api/auth/login')
            .send(user)
            .then( res => {
                const token = res.body.token

                return request(server)
                    .put("/api/users/1")
                    .set("Authorization", token)
                    .send(data)
                    .then(res => {
                        expect(res.status).toBe(201)
                    })
                })

    })
})