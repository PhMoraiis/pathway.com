import { createOpenApiServerActionRouter } from 'zsa-openapi'
import { usersRouter } from './users'
// import { goalsRouter } from './goals'

export const router = createOpenApiServerActionRouter({
  pathPrefix: '/api',
  extend: [usersRouter ],
  defaults: {
    contentTypes: ['application/json'],
  }
})
