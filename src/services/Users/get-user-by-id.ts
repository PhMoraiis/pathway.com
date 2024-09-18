import { prisma } from '@/db'
import type IUser from '@/types/user-types'

export async function getUserByID({ id }: Partial<IUser>) {
  const userId = id

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return {
    user,
  }
}
