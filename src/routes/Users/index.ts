import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import type IUser from '@/types/user-types'

import { getAllUsers } from '@/services/Users/get-all-users'
import { getUserByID } from '@/services/Users/get-user-by-id'
import { createUser } from '@/services/Users/create-user'
import { updateUser } from '@/services/Users/update-user'
import { deleteUser } from '@/services/Users/delete-user'

const getAllUsersRoute: FastifyPluginAsyncZod = async app => {
  app.get('/users', async () => {
    const { users } = await getAllUsers()

    return { users }
  })
}

const getUserByIdRoute: FastifyPluginAsyncZod = async app => {
  app.get('/users/:id', async request => {
    const { id } = request.params as Partial<IUser>

    const { user } = await getUserByID({ id })

    return { user }
  })
}

const createNewUserRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/users',
    {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
      },
    },
    async request => {
      const { name, email } = request.body

      const newUser = await createUser({
        name: name,
        email: email,
      })

      return newUser
    }
  )
}

const deleteUserRoute: FastifyPluginAsyncZod = async app => {
  app.delete('/users/:id', async request => {
    const { id } = request.params as Partial<IUser>

    const { user } = await deleteUser({ id })

    return { user }
  })
}

const updateUserRoute: FastifyPluginAsyncZod = async app => {
  app.put(
    '/users/:id',
    {
      schema: {
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
      },
    },
    async request => {
      const { id } = request.params as IUser
      const { name, email } = request.body

      const { user } = await updateUser({ id, name, email })

      return { user }
    }
  )
}

export {
  getAllUsersRoute,
  getUserByIdRoute,
  createNewUserRoute,
  deleteUserRoute,
  updateUserRoute,
}
