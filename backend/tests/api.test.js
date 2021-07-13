const supertest = require('supertest')
const mongoose = require('mongoose')
const { app, server } = require('../app')
const Factura = require('../models/Factura')


const api = supertest(app)
const registrosIniciales=[
    {
        fecha: new Date(),
        Hora: 5,
        consumo: 15,
        precio: 0.045879545,
        costeHora: 0.001542658987
    },
    {
        fecha: new Date(),
        Hora: 5,
        consumo: 25,
        precio: 0.085879545,
        costeHora: 0.081542658987
    }
]

beforeEach(async ()=>{
    await Factura.deleteMany({})

    const registro1= new Factura((registrosIniciales[0]))
    await registro1.save()
    const registro2= new Factura((registrosIniciales[1]))
    await registro2.save()
})

//Testing endpoint's GET 
test('DEvuelve Array de todos los registros en la base de datos', async () => {
    await api
        .get('/public/listAll')
        .expect('Content-Type', /application\/json/)
        .expect(200)
})
test('Hay 2 registros exactamente', async () => {
    const res = await api.get('/public/listAll')
    expect(res.body).toHaveLength(registrosIniciales.length)
})

//Testing endpoint's POST
test('Agregamos nuevo registro', async () => {
    const newRegister =   {
        fecha: new Date(),
        Hora: 5,
        consumo: 15,
        precio: 0.045879545,
        costeHora: 0.001542658987
    }

    await api
        .post('/addOne')
        .send(newRegister)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    const res = await api.get('/public/listAll')
    const contents = res.body.map(reg=>reg.content)
    expect(res.body).toHaveLength(registrosIniciales.length+1)
    expect(contents).toContain(newRegister.content)
})

test('No se puede añadir un nuevo registro vacio', async () => {
    const newRegister =   {
        Hora: 5,
        consumo: 15,
        precio: 0.045879545,
        costeHora: 0.001542658987
    }

    await api
        .post('/addOne')
        .send(newRegister)
        .expect(400)
    const res = await api.get('/public/listAll')
    expect(res.body).toHaveLength(registrosIniciales.length)
})




afterAll(()=>{
    server.close()
    mongoose.connection.close()
})