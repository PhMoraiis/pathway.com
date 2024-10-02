import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '../ui/dropdown-menu'
import {
  Menu,
  Home,
  Route,
  Wallet,
  LineChart,
  Search,
  Bell,
  LogOut,
} from 'lucide-react'
import { Button } from '../ui/button'
import { PathwayLogo } from '../pathway-logo'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function MobileSidebar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex h-14 items-center gap-4 bg-background px-4 lg:h-[80px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu strokeWidth={3} className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/app"
              className="flex items-center gap-2 text-lg font-semibold mb-6 h-14 px-4 md:h-[80px] lg:h-[80px] lg:px-6"
            >
              <PathwayLogo width={42} height={42} />
              <span className="sr-only">Pathway</span>
            </Link>
            <Link
              href="/app"
              className="group mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground hover:bg-border/20"
            >
              <Home
                strokeWidth={3}
                className="h-5 w-5 group-hover:text-primary-light"
              />
              Dashboard
            </Link>
            <Link
              href="/app/paths"
              className="group mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground hover:bg-border/20"
            >
              <Route
                strokeWidth={3}
                className="h-5 w-5 group-hover:text-primary-light"
              />
              Paths
            </Link>
            <Link
              href="/app/transactions"
              className="group mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground hover:bg-border/20"
            >
              <Wallet
                strokeWidth={3}
                className="h-5 w-5 group-hover:text-primary-light"
              />
              Transactions
            </Link>
            <Link
              href="/app/analytics"
              className="group mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-text hover:text-foreground hover:bg-border/20"
            >
              <LineChart
                strokeWidth={3}
                className="h-5 w-5 group-hover:text-primary-light"
              />
              Analytics
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
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
          <h1 className="text-lg font-semibold md:text-2xl text-text">Paths</h1>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {/* Aqui irá ficar a command bar*/}
          <Search className="h-5 w-5 text-primary" />
        </Button>
        <Button variant="outline" size="icon">
          {/* Aqui irá ficar a command bar*/}
          <Bell className="h-5 w-5 text-secondary" />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 w-10">
            <AvatarImage src={'/avatar.png'} alt="Your profile picture" />
            <AvatarFallback>PM</AvatarFallback>
            <span className="sr-only">Toggle user menu</span>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout <LogOut /></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
