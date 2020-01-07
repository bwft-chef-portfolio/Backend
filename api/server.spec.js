const request = require("supertest")

const server = require("./server.js")


describe("server.js", function() {
    describe("environment", function() {
        it("environment should be testing", function() {
            expect(process.env.DB_ENV).toBe("testing")
        })
    })

    describe("GET /", function() {
        it("200 should return", function() {
           return request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200)
                });
            })
        it("should return a JSON", function() {
            return request(server)
                .get("/")
                .then(res => {
                expect(res.type).toMatch(/json/i);
                });
            });
      
        it("check for server is up text",  function() {
           return request(server)
                .get("/")
                .then(res => {
                    expect(res.body.server).toBe("server is up")
                })
            })
    })

})