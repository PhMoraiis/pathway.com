import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'
import {
  createNewUserRoute,
  deleteUserRoute,
  getAllUsersRoute,
  getUserByIdRoute,
  updateUserRoute,
} from '@/routes/Users'
import { env } from '@/env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(getAllUsersRoute)
app.register(getUserByIdRoute)
app.register(deleteUserRoute)
app.register(createNewUserRoute)
app.register(updateUserRoute)

app.get('/', () => 'Hello World!')

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server running on http://localhost:${env.PORT}`)
  })
