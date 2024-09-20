import { prisma } from '@/db'
import type IUser from '@/types/user-types'

export async function deleteUser({ id }: Partial<IUser>) {
  const userId = id

  const user = await prisma.user.delete({
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
