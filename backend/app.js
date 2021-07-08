require('dotenv').config()
const express = require('express')
const app = express()

//Roters
// const rtApi = require('./routers/rtApi')
// const rtListaMercado = require('./routers/rtListaMercado')
// const connection = require('./connection')


// //Mongo estado de la connection
const connection = require('./connection')
connection.on('error', console.error.bind(console, "Error de conexion MongoDB"))
connection.once('open', ()=> console.log("Conexión a MongoDB Ok!!"))

//middleware cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
//     next()
// })

// //middleware
// app.use(express.static(__dirname+'/public'))
// app.use(express.urlencoded({extended:true}))//para cuando llegan datos desde un formulario
// app.use(express.json())
// app.use('/api', rtApi)
// app.use('/listado', rtListaMercado)


let port = process.env.PORT_SERVER || 3000
app.listen(port, (err)=>{
    if(err) console.log("Errores: ", err)
    console.log(`Server OK in port ${port}`)
})