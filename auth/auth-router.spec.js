const request = require('supertest')
const db = require('../database/dbConfig')
const server = require("../api/server")




describe('server', function () {
    
    describe('register 500', function() {
        it('500 should return since not inserting  the right data', function () {
            return request(server)
            .post('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
    })
    
        it('404 should return since wrong request', function (){
            return request(server)
            .get('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it(' should return 201 for account creation', function (){
            const login = { username: "test4545", password: "test4455" }
            console.log(login)
            return request(server)
            .post('/api/auth/register')
            .send(login)
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    
  
  
    /// Login test 
    describe('Login 500', function() {
        it('500 should return since not inserting  the right data', function () {
            return request(server)
            .post('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(500)
            })
        })
    })
   
        it('404 should return since wrong request', function (){
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
 
   
        it(' should return 201 for login', function (){
            const user = { username: "test", password: "test" }
            console.log(user)
            return request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
})