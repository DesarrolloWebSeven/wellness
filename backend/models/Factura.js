const mongoose = require('mongoose')
const { Schema } = mongoose

const miFactura = new Schema({
    fecha: { type: Date, required:[true, "Debe introducir una fecha"]}, 
    hora: { type: Number, required:[true, "Debe seleccionar una fecha entre 0-23"], default: 0},
    consumo: { type: Number, required:[true, "Debe introducir una número entero"], default: 0},
    precio: { type: Number, required:[true, "Ingrese un valor valido para precio"], default: 0},
    costeHora: { type: Number, required:[true, "Ha ocurrido un error con el valor del costo"], default:0},
},{
    timestamps:true
})

module.exports = mongoose.model('factura', miFactura)