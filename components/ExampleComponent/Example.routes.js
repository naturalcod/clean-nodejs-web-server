var express = require("express"),
ExampleRouter = express.Router();

const ExampleController = require('./Example.controller');


ExampleRouter.get('/', (req,res) => new ExampleController(req,res).call('getPositions'))

ExampleRouter.use('/Login', (req,res) => new ExampleController(req,res).call('getPositions'))



module.exports = ExampleRouter;


