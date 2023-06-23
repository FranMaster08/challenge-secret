import { Router } from 'express'
import { routes } from './secretFile.routes.js'
const route = Router()
route.use('/file', routes)
export default route
