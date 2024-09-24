import { createOpenApiServerActionRouter } from 'zsa-openapi'
import {
  getAllUsersAction,
  getUserByIdAction,
  updateUserByIdAction,
  deleteUserByIdAction,
} from '@/actions/Users/'

export const usersRouter = createOpenApiServerActionRouter({
  pathPrefix: '/api/users',
  defaults: {
    tags: ['Users'],
    protect: true,
  },
})
  .get('/users', getAllUsersAction)
  .get('/users/{id}', getUserByIdAction)
  .put('/users/{id}', updateUserByIdAction)
  .delete('/users/{id}', deleteUserByIdAction)
