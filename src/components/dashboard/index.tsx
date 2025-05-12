import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

export default function Dashboard() {
  const { theme } = useTheme()

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-1 items-center justify-center rounded-lg shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You theme is {theme}
          </h3>
          <p className="text-sm text-text">
            You can start selling as soon as you add a product.
          </p>
          <Button variant="default" className="mt-4">
            Add Product
          </Button>
          <Button variant="secondary" className="mt-4">
            Add Product
          </Button>
          <Button variant="outline" className="mt-4">
            Add Product
          </Button>
          <Button variant="destructive" className="mt-4">
            Add Product
          </Button>
          <Button variant="ghost" className="mt-4">
            Add Product
          </Button>
          <Button variant="link" className="mt-4">
            Add Product
          </Button>
          <Button size="icon" variant="outline" className="mt-4">
            <Search />
          </Button>
        </div>
      </div>
    </main>
  )
}
