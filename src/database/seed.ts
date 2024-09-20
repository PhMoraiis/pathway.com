import dayjs from 'dayjs'
import { prisma } from '.'

async function seed() {
  await prisma.goalCompletion.deleteMany()
  await prisma.transaction.deleteMany()
  await prisma.goal.deleteMany()

  const startOfWeek = dayjs().startOf('week')

  const result = await prisma.goal.createMany({
    data: [
      {
        title: 'PC Gamer',
        valueTarget: 4000,
        currentValue: 4000,
        colorCard: '#f0c14b',
        ownerId: '1',
      },
      {
        title: 'Monitor Gamer',
        valueTarget: 4000,
        currentValue: 4000,
        colorCard: '#f0c14b',
        ownerId: '1',
      },
    ],
  })

  await prisma.transaction.createMany({
    data: [
      {
        type: 'income',
        amount: 1000,
        title: 'Salário',
        description: 'Salário do mês',
        goalId: result[0].id,
        createdAt: startOfWeek.toDate(),
      },
      {
        type: 'income',
        amount: 1000,
        title: 'Freelancer',
        description: 'Freelancer do mês',
        goalId: result[1].id,
        createdAt: startOfWeek.add(1, 'day').toDate(),
      },
    ],
  })

  await prisma.goalCompletion.createMany({
    data: [
      { goalId: result[0].id, createdAt: startOfWeek.toDate() },
      { goalId: result[1].id, createdAt: startOfWeek.add(1, 'day').toDate() },
    ],
  })
}

seed().finally(() => {
  prisma.$disconnect()
})
