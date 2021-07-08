const mongoose = require('mongoose')
const { Schema } = mongoose

const miFactura = new Schema({
    fecha: { type: Date }, 
    Hora: { type: Date },
    Consumo: { type: Number },
    Precio: { type: Number },
    CosteHora: { type: Number },
},{
    timestamps:true
})

module.exports= mongoose.model('factura', miFactura)