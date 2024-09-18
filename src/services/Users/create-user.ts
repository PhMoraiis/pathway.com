import { prisma } from '@/db'

interface ICreateUserRequest {
  name: string
  email: string
}

export async function createUser({ name, email }: ICreateUserRequest) {
  const userEmailAlreadyExists = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  })

  if (userEmailAlreadyExists) {
    throw new Error('User already exists')
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  })

  return {
    newUser,
  }
}
