import { Router } from 'express'
import { SecretController } from '../controller/index.js'
const routes = Router()

routes.get('/list', SecretController.getAllFiles)
routes.get('/data', SecretController.getFile)

export { routes }
