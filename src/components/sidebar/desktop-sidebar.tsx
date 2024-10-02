import Link from 'next/link'
import { PathwayLogo } from '../pathway-logo'
import { Home, LineChart, Route, Wallet } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'

export default function DesktopSidebar() {
  return (
    <div className="hidden border-r bg-background md:block w-[220px]">
      <div className="flex h-full max-h-screen flex-col gap-6">
        <div className="flex h-14 items-center px-4 md:h-[80px] lg:h-[80px] lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-text"
          >
            <PathwayLogo width={42} height={42} />
            <span className="uppercase tracking-wider">Pathway</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-4">
            <Link
              href="/app"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all hover:bg-border/20"
            >
              <Home
                strokeWidth={3}
                className="h-4 w-4 group-hover:text-primary-light"
              />
              Dashboard
            </Link>
            <Link
              href="/app/paths"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all hover:bg-border/20"
            >
              <Route
                strokeWidth={3}
                className="h-4 w-4 group-hover:text-primary-light"
              />
              Paths
            </Link>
            <Link
              href="/app/transactions"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all hover:bg-border/20"
            >
              <Wallet
                strokeWidth={3}
                className="h-4 w-4 group-hover:text-primary-light"
              />
              Transactions{' '}
            </Link>
            <Link
              href="/app/analytics"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-text transition-all hover:bg-border/20"
            >
              <LineChart
                strokeWidth={3}
                className="h-4 w-4 group-hover:text-primary-light"
              />
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
  )
}
