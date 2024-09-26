import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Github,
  LogOut,
  MailIcon,
  MessageSquare,
  Settings,
  ShieldQuestion,
  User,
  WalletMinimal,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function DropdownAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
            Profile
            <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
            Billing
            <WalletMinimal className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
            Settings
            <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
                  Email
                  <MailIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
                  Message
                  <MessageSquare className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
          GitHub
          <Github className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer">
          Support
          <ShieldQuestion className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-between gap-2 cursor-pointer hover:bg-red-500 hover:text-zinc-50">
          Log out
          <LogOut className=" dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
