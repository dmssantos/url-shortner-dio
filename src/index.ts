import { MongoConnection } from './database/MongoConnection';
import express from 'express';
import { URLControler } from './controller/URLController';

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLControler()

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express Listening'))
