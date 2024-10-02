import { Bell, Search } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

export default function HeaderBar() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
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
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          {/* Aqui irá ficar a command bar*/}
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
