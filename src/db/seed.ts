import { client, db } from './index.js'
import { goalCompletions, goals, transactions } from './schema.js'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(transactions)
  await db.delete(goals)

  const startOfWeek = dayjs().startOf('week')

  const result = await db
    .insert(goals)
    .values([
      {
        title: 'PC Gamer',
        valueTarget: 4000,
        currentValue: 4000,
        colorCard: '#f0c14b',
      },
      {
        title: 'Monitor Gamer',
        valueTarget: 4000,
        currentValue: 4000,
        colorCard: '#f0c14b',
      },
    ])
    .returning()
  
  await db.insert(transactions).values([
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
  ])

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: startOfWeek.toDate() },
    { goalId: result[1].id, createdAt: startOfWeek.add(1, 'day').toDate() },
  ])
}

seed().finally(() => {
  client.end()
})
