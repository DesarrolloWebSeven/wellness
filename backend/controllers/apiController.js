const Factura = require('../models/Factura')

const addRegister = (req, res) => {

}

const deleteRegister = (req, res) => {
    
}

const updateRegister = (req, res) => {
    
}

const listRegisters = (req, res) => {
    Factura.find().lean()
    .then(data => {
        res.json(data)
      })
    .catch(err => res.json(err))
}

const findRegisterByDate = (req, res) => {
    Product.find({ fecha: category })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const findRegisterByHour = (req, res) => {
    
}
const findRegisterByCost = (req, res) => {
    
}
const findRegisterByPrice = (req, res) => {
    
}
const findRegisterByConsumtion = (req, res) => {
    
}

module.exports={
    addRegister,
    deleteRegister,
    updateRegister,
    listRegisters,
    findRegisterByDate,
    findRegisterByHour,
    findRegisterByConsumtion,
    findRegisterByPrice,
    findRegisterByCost
}