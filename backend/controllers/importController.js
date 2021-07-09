const path = require('path')
const csv = require('csvtojson')
const Factura = require('../models/Factura')

//Agregar nuevos datos
const addRegisters = async (req,res) => {
    //Almacenamos el archivo en el servidor
    var file = req.files.file
    try {
        await file.mv(path.join(__dirname, '../data/', file.name), (err) => {
            err ? res.send(err) : parseFile(file)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({message:err})
    }
}

//Parsear y guardar el archivo en Base de batos
const parseFile = (file) => {
    csv({ 
        noheader: false, 
        headers: ['fecha', 'hora', 'consumo', 'precio', 'costeHora'],
        checkType: true
    })
        .fromFile(path.join(__dirname, '../data/', file.name))
        .then(csvData => {
            console.log(csvData)
            csvData.forEach((register=>{
                let newRegister = new Factura(register)
                newRegister.save()
            }))
        })
}

module.exports={
    addRegisters
}