const Factura = require('../models/Factura')

const addRegister = (req, res) => {
    console.log(req.body)
    let newRegister = new Factura(req.body)
    newRegister.save()
    .then(() => res.json({message: 'Agregado con exito!'}))
    .catch((err) => res.json({message: `Algo salio mal: ${err}`}))
}

const deleteRegister = (req, res) => {
    console.log(req.params.id)
    Factura.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Borrado con exito' }))
        .catch(err => res.json({ error: err }))
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