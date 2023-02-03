var express = require("express"),
  PositionRouter = express.Router();

const positionController = require('./Position.controller');

// Get Actual Positions
PositionRouter.get('/', (req,res) => new positionController(req,res).call('getPositions'))

PositionRouter.use('/Login', (req,res) => new positionController(req,res).call('getPositions'))



module.exports = PositionRouter;


