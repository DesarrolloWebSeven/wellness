const Factura = require('../models/Factura')

const addRegister = (req, res) => {
    let newRegister = new Factura(req.body)
    newRegister.save()
        .then(() => res.status(200).json({message: 'Agregado con exito!'}))
        .catch((err) => res.status(400).json({message: `Algo salio mal: ${err}`}))
}

const deleteRegister = (req, res) => {
    Factura.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: 'Borrado con exito!' }))
        .catch(err => res.status(400).json({ message: `Algo salio mal: ${err}` }))
}   

const updateRegister = (req, res) => {
    let coste = (req.body.consumo * req.body.precio)/1000
    Factura.findByIdAndUpdate({_id : req.params.id}, {
        fecha: req.body.fecha,
        hora: req.body.hora,
        consumo: req.body.consumo,
        precio: req.body.precio,
        costeHora: coste
    })
        .then(() => res.status(200).json({ message: 'Actualizado con exito!' }))
        .catch(err => res.status(400).json({ message: `Algo salio mal: ${err}` }))
}

const listRegisters = (req, res) => {
        Factura.find().lean()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
}

module.exports={
    addRegister,
    deleteRegister,
    updateRegister,
    listRegisters,
}