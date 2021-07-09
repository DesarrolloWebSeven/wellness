const express = require('express')
const rtAdmin = express.Router()
const importController = require('../controllers/importController');
const apiController = require('../controllers/apiController')
rtAdmin.post('/', importController.addRegisters)
rtAdmin.post('/addOne', apiController.addRegister)
rtAdmin.delete('deleteOne', apiController.deleteRegister)
rtAdmin.put('updateOne', apiController.updateRegister)

module.exports = rtAdmin