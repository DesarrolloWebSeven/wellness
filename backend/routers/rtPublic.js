const express = require('express')
const rtPublic = express.Router()
const apiController = require('../controllers/apiController')

rtPublic.get('/listAll', apiController.listRegisters)

module.exports = rtPublic