var express = require("express"),

UsersRouter = express.Router();



const requestValidator = require("../../lib/core/middlewares/request.validator");
// Controller
const UsersController = require('./Users.controller');

// Auth Middleware
const AuthMiddleware = require('../../lib/core/middlewares/auth')()


// Array of Middlewares
let middlewares = [AuthMiddleware, requestValidator]


// Route for authentification
UsersRouter.get('/Login', [middlewares], (req,res) => new UsersController(req,res).call('getUsers'))


// 404 handler
UsersRouter.use('*', (req,res) => {
    res.status(404);
    res.json({detail: 'Page Not Found'})
})


module.exports = UsersRouter;


