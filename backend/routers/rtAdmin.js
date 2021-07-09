const express = require('express')
const rtAdmin = express.Router()
const importController = require('../controllers/importController');

rtAdmin.post('/', importController.addData)

module.exports = rtAdmin