import { prisma } from '@/db'
import type IUser from '@/types/user-types'

export async function updateUser({ id, name, email }: IUser) {
  const userId = id

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: name,
      email: email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return {
    user,
  }
}
