import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, MinusCircle, Target, DollarSign, TrendingUp, TrendingDown } from 'lucide-react'

// Tipos
type Goal = {
  id: number;
  name: string;
  target: number;
  current: number;
}

type Transaction = {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
}

export default function FinancialDashboard() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, name: "Fundo de emergência", target: 10000, current: 5000 },
    { id: 2, name: "Viagem de férias", target: 5000, current: 2000 },
    { id: 3, name: "Novo computador", target: 3000, current: 1500 },
  ])
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: 'income', amount: 1000, description: "Salário", date: "2023-06-01" },
    { id: 2, type: 'expense', amount: 200, description: "Supermercado", date: "2023-06-02" },
    { id: 3, type: 'income', amount: 500, description: "Freelance", date: "2023-06-03" },
  ])
  const [newTransaction, setNewTransaction] = useState({ type: 'income', amount: 0, description: '' })
  const [newGoal, setNewGoal] = useState({ name: '', target: 0 })

  const addTransaction = () => {
    if (newTransaction.amount > 0 && newTransaction.description) {
      const updatedGoals = goals.map(goal => ({
        ...goal,
        current: goal.current + (newTransaction.type === 'income' ? newTransaction.amount : -newTransaction.amount)
      }))
      setGoals(updatedGoals)
      setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1, date: new Date().toISOString().split('T')[0] }])
      setNewTransaction({ type: 'income', amount: 0, description: '' })
    }
  }

  const addGoal = () => {
    if (newGoal.name && newGoal.target > 0) {
      setGoals([...goals, { ...newGoal, id: goals.length + 1, current: 0 }])
      setNewGoal({ name: '', target: 0 })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard Financeiro</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {goals.map(goal => (
          <Card key={goal.id}>
            <CardHeader>
              <CardTitle>{goal.name}</CardTitle>
              <CardDescription>Meta: R$ {goal.target.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={(goal.current / goal.target) * 100} className="w-full" />
              <p className="mt-2">Progresso: R$ {goal.current.toFixed(2)} / R$ {goal.target.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Registrar Transação</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="income">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="income">Ganho</TabsTrigger>
                <TabsTrigger value="expense">Gasto</TabsTrigger>
              </TabsList>
              <TabsContent value="income">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="income-amount">Valor</Label>
                    <Input
                      id="income-amount"
                      type="number"
                      placeholder="Digite o valor"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, type: 'income', amount: parseFloat(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income-description">Descrição</Label>
                    <Input
                      id="income-description"
                      placeholder="Digite a descrição"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="expense">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="expense-amount">Valor</Label>
                    <Input
                      id="expense-amount"
                      type="number"
                      placeholder="Digite o valor"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, type: 'expense', amount: parseFloat(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expense-description">Descrição</Label>
                    <Input
                      id="expense-description"
                      placeholder="Digite a descrição"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={addTransaction}>Registrar Transação</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Adicionar Nova Meta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal-name">Nome da Meta</Label>
                <Input
                  id="goal-name"
                  placeholder="Digite o nome da meta"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-target">Valor da Meta</Label>
                <Input
                  id="goal-target"
                  type="number"
                  placeholder="Digite o valor da meta"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({ ...newGoal, target: parseFloat(e.target.value) })}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={addGoal}>Adicionar Meta</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {transactions.map(transaction => (
              <li key={transaction.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <div className="flex items-center">
                  {transaction.type === 'income' ? (
                    <TrendingUp className="text-green-500 mr-2" />
                  ) : (
                    <TrendingDown className="text-red-500 mr-2" />
                  )}
                  <span>{transaction.description}</span>
                </div>
                <div className="flex items-center">
                  <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                    R$ {transaction.amount.toFixed(2)}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">{transaction.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}