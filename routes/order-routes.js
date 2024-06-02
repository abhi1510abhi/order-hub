
const express = require('express');
const serviceRouter = express.Router();

let orderController = require('../controllers/order-controller')
serviceRouter.get('/',orderController.health);
serviceRouter.post('/print',orderController.printName);

module.exports = serviceRouter;