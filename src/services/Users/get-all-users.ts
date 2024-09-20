import { prisma } from '@/db'

export async function getAllUsers() {
  const users = await prisma.user.findMany()

  return { users }
}
