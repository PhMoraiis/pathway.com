import { Router } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.get('/', (req, res) => {
  res.send('Hello World! Você está na raiz da API!')
})

routes.post('/users/create', new UserController().create)
routes.post('/login', new UserController().login)
routes.get('/profile', new UserController().getProfile)
routes.use(authMiddleware)

export { routes }