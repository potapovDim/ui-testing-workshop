const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const logger = require('koa-logger')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const connectedMongoose = mongoose.connect('mongodb://127.0.0.1:27051')

const createBaseTestShema = mongoose => {
  const testShema = mongoose.Schema({
    field1: String,
    field2: String
  })
  return mongoose.model('test', testShema)
}

const BaseShema = createBaseTestShema(connectedMongoose)

const addNewTestData = BaseShema => async (ctx) => {
  const {data: {field1, field2} } = ctx.request.body
  await BaseShema({field1, field2}).save()
  ctx.status = 201
  ctx.body = {
    message: 'Date success created'
  }
  return ctx
}


router.post('/', addNewTestData(BaseShema))

app.use(bodyParser())
app.use(cors())
app.use(logger())
app.use(router.routes())

const PORT = 9090

app.listen(PORT)

console.log('server start on port ' + PORT)
