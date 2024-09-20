import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, MinusCircle, TrendingUp, TrendingDown, Search, Bell } from 'lucide-react'

type Goal = {
  id: number;
  name: string;
  target: number;
  current: number;
  color: string;
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
    { id: 1, name: "Fundo de emergência", target: 10000, current: 5000, color: "bg-purple-500" },
    { id: 2, name: "Viagem de férias", target: 5000, current: 2000, color: "bg-yellow-500" },
    { id: 3, name: "Novo computador", target: 3000, current: 1500, color: "bg-orange-500" },
    { id: 4, name: "Investimentos", target: 20000, current: 15000, color: "bg-green-500" },
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
      const colors = ["bg-purple-500", "bg-yellow-500", "bg-orange-500", "bg-green-500", "bg-blue-500", "bg-pink-500"]
      setGoals([...goals, { ...newGoal, id: goals.length + 1, current: 0, color: colors[goals.length % colors.length] }])
      setNewGoal({ name: '', target: 0 })
    }
  }

  const totalBalance = goals.reduce((sum, goal) => sum + goal.current, 0)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10 bg-gray-800 border-gray-700 text-white" placeholder="Buscar..." />
            </div>
            <Bell className="text-gray-400" />
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-2 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Saldo Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">${totalBalance.toFixed(2)}</div>
              <div className="text-green-500 mt-2">
                <TrendingUp className="inline mr-2" />
                +2.5%
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Adicionar Transação</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="income" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="income">Ganho</TabsTrigger>
                  <TabsTrigger value="expense">Gasto</TabsTrigger>
                </TabsList>
                <TabsContent value="income">
                  <div className="space-y-4">
                    <Input
                      type="number"
                      placeholder="Valor"
                      value={newTransaction.amount || ''}
                      onChange={(e) => setNewTransaction({ ...newTransaction, type: 'income', amount: parseFloat(e.target.value) })}
                    />
                    <Input
                      placeholder="Descrição"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    />
                    <Button onClick={addTransaction} className="w-full">Adicionar Ganho</Button>
                  </div>
                </TabsContent>
                <TabsContent value="expense">
                  <div className="space-y-4">
                    <Input
                      type="number"
                      placeholder="Valor"
                      value={newTransaction.amount || ''}
                      onChange={(e) => setNewTransaction({ ...newTransaction, type: 'expense', amount: parseFloat(e.target.value) })}
                    />
                    <Input
                      placeholder="Descrição"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    />
                    <Button onClick={addTransaction} className="w-full">Adicionar Gasto</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {goals.map(goal => (
            <Card key={goal.id} className={`${goal.color} bg-opacity-20 border-none`}>
              <CardHeader>
                <CardTitle>{goal.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${goal.current.toFixed(2)}</div>
                <Progress value={(goal.current / goal.target) * 100} className="mt-2" />
                <div className="mt-2 text-sm">Meta: ${goal.target.toFixed(2)}</div>
                <div className="text-xs mt-1">
                  {((goal.current / goal.target) * 100).toFixed(1)}% alcançado
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {transactions.slice(-5).map(transaction => (
                  <li key={transaction.id} className="flex items-center justify-between p-2 bg-gray-700 rounded">
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
                        ${transaction.amount.toFixed(2)}
                      </span>
                      <span className="ml-2 text-gray-400 text-sm">{transaction.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Nova Meta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Nome da Meta"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                />
                <Input
                  type="number"
                  placeholder="Valor da Meta"
                  value={newGoal.target || ''}
                  onChange={(e) => setNewGoal({ ...newGoal, target: parseFloat(e.target.value) })}
                />
                <Button onClick={addGoal} className="w-full">Adicionar Meta</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}