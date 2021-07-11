const express = require('express')
const rtPublic = express.Router()
const importController = require('../controllers/importController');
const apiController = require('../controllers/apiController')
rtPublic.get('/listAll', apiController.listRegisters)
rtPublic.get('/byDate', apiController.findRegisterByDate)
rtPublic.get('/byHour', apiController.findRegisterByHour)
rtPublic.get('/byConsumtion', apiController.findRegisterByConsumtion)
rtPublic.get('/byPrice', apiController.findRegisterByPrice)
rtPublic.get('/byCost', apiController.findRegisterByCost)

module.exports = rtPublic