require('dotenv').config()
const fileUpload = require('express-fileupload')
const connection = require('./connection')
const express = require('express')
const app = express()

// Estado de la conexion Mongo
connection.on('error', console.error.bind(console, "Error de conexion MongoDB"))
connection.once('open', ()=> console.log("Conexión a MongoDB Ok!!"))

//Cors
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
        next()
    })
    
//middleware
app.use(fileUpload())
app.use(express.urlencoded({extended:true}))//para cuando llegan datos desde un formulario
app.use(express.json())
app.use('/', require('./routers/rtAdmin'))
app.use('/public', require('./routers/rtPublic'))

//Configuracion del server
const PORT = process.env.PORT_SERVER || 3000
const server = app.listen(PORT, (err)=>{
    if(err) console.log("Error: ", err)
    console.log(`Server OK in port ${PORT}`)
})

module.exports = { app, server }