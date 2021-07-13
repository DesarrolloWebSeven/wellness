const mongoose = require('mongoose')

const { DB_NAME, DB_NAME_TEST, NODE_ENV} = process.env
const connectionDB = NODE_ENV == 'test' ? DB_NAME_TEST : DB_NAME
let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${connectionDB}`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

module.exports=mongoose.connection
