const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const csv2 = require('csvtojson')
const Factura = require('../models/Factura')

//Agregar nuevos datos
const addData = async (req,res) => {
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

//Parsear el file
const parseFile = (file) => {
    // let arrayData = []
    // fs.createReadStream(path.join(__dirname, '../data/', file.name))
    //     .pipe(csv.parse({headers: true, ignoreEmpty: true}))
    //     .on('error', error => console.error(error))
    //     .on('data', row => console.log(row))
    //     .on('end', rowCount => console.log(`Parsed ${rowCount} rows`))


    csv2({ 
        noheader: false, 
        headers: ['fecha', 'hora', 'consumo', 'precio', 'costeHora'],
        checkType: true
    })
        .fromFile(path.join(__dirname, '../data/', file.name))
        .then(csvData => {
            console.log(csvData)
            csvData.forEach((registro=>{
                let newRegistro = new Factura(registro)
                newRegistro.save()
            }))
        })
}

module.exports={
    addData
}