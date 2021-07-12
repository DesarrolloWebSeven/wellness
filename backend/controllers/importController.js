const path = require('path')
const csv = require('csvtojson')
const Factura = require('../models/Factura')

//Agregar nuevos datos
const addRegisters = async (req,res) => {
    //Almacenamos el archivo en el servidor
    try {
        if(req.files === undefined || req.files.file.mimetype != 'application/vnd.ms-excel'){
            res.status(400).json({message: 'Debe seleccionar un archivo de extensión .CSV'})
        }else{
            var file = req.files.file
            await file.mv(path.join(__dirname, '../data/', file.name), async (err) => {
                if (err) res.send(err) 
                else{
                    await parseFile(file)
                    res.send('<h1><a href="http://localhost:8080">Archivo subido exitosamente. Haga click aquí para volver</a></h1>')
                } 
            })
        }
    } catch (err) {
        res.status(500).json({message: `No ha seleccionado ningun archivo`})
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
            csvData.forEach((register=>{
                let newRegister = new Factura(register)
                newRegister.save()
                .then(data => { return data })
            }))
        })
}

module.exports={
    addRegisters
}