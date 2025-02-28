import { createOpenApiServerActionRouter } from 'zsa-openapi'

export const goalsRouter = createOpenApiServerActionRouter({
  pathPrefix: '/api/goals',
  defaults: {
    tags: ['Goals'],
    protect: true,
  },
})
  .get('/goals', )
  .get('/goals/{id}', )
  .put('/goals/{id}', )
  .delete('/goals/{id}', )
