const mongoose = require('mongoose')
const { Schema } = mongoose

const miFactura = new Schema({
    fecha: { type: Date }, 
    hora: { type: Number },
    consumo: { type: Number },
    precio: { type: Number },
    costeHora: { type: Number },
},{
    timestamps:true
})

module.exports= mongoose.model('factura', miFactura)