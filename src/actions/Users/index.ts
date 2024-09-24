'use server'

import { createServerAction } from 'zsa'
import prisma from '@/database'
import { z } from 'zod'



export const getAllUsersAction = createServerAction().handler(async () => {
  const users = await prisma.user.findMany()
  return { users }
})

export const getUserByIdAction = createServerAction()
  .input(z.object({ id: z.string() }))
  .handler(async ({ input }) => {
    const user = await prisma.user.findUnique({ where: { id: input.id } })
    if (!user) {
      throw new Error('User not found')
    }
    return { user }
  })

export const updateUserByIdAction =createServerAction()
  .input(
    z.object({
      id: z.string(),
      newName: z.string().optional(),
      newEmail: z.string().email({ message: 'Invalid email' }).optional(),
      newImage: z.string().optional(),
    })
  )
  .handler(async ({ input }) => {
    const updatedUser = await prisma.user.update({
      where: { id: input.id },
      data: {
        name: input.newName,
        email: input.newEmail,
        image: input.newImage
      },
    })

    if (!updatedUser) {
      throw new Error('Failed to update user')
    }

    return { name: input.newName, email: input.newEmail }
  })

export const deleteUserByIdAction = createServerAction()
  .input(z.object({ id: z.string() }))
  .handler(async ({ input }) => {
    const deletedUser = await prisma.user.delete({ where: { id: input.id } })
    if (!deletedUser) {
      throw new Error('Failed to delete user')
    }
    return { deletedUser }
  })