'use client'

import Link from 'next/link'
import {
  Bell,
  Home,
  LineChart,
  Menu,
  Package2,
  Route,
  Search,
  Wallet,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { PathwayLogo } from '@/components/pathway-logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTheme } from 'next-themes'

export default function Dashboard() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-background md:block w-[220px]">
        <div className="flex h-full max-h-screen flex-col gap-6">
          <div className="flex h-14 items-center px-4 md:h-[80px] lg:h-[80px] lg:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-text"
            >
              <PathwayLogo width={42} height={42} />
              <span className="uppercase">Pathway</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-4">
              <Link
                href="/app"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/app/paths"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all"
              >
                <Route className="h-4 w-4" />
                Paths
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/app/transactions"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all"
              >
                <Wallet className="h-4 w-4" />
                Transactions{' '}
              </Link>
              <Link
                href="/app/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 bg-background px-4 md:h-[80px] lg:h-[80px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Pathway</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/app/paths"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <Route className="h-5 w-5" />
                  Paths
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="/app/transactions"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground"
                >
                  <Wallet className="h-5 w-5" />
                  Transactions
                </Link>
                <Link
                  href="/app/analytics"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl text-text">
                Paths
              </h1>
            </div>
          </div>
          <div className='space-x-2'>
            <Button
              variant="outline"
              size="icon"
            >
              {/* Aqui irá ficar a command bar*/}
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
            >
              {/* Aqui irá ficar a command bar*/}
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                {/* <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback> */}
                <span className="sr-only">Toggle user menu</span>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div
            className="flex flex-1 items-center justify-center rounded-lg shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You theme is {theme}
              </h3>
              <p className="text-sm text-text">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
