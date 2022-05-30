
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
//@ts-ignore
import path from 'node:path'
import { runPotholesConsumer } from './consumers/potholesConsumer'
import './database/connection'
import errorHandler from './errors/handler'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
//@ts-ignore
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)
// runPotholesConsumer();

