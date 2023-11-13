import {
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenu,
} from '@/components/ui/dropdown-menu'
import { AvatarFallback, AvatarImage, Avatar } from '@/components/ui/avatar'
import { useNavigate } from '@tanstack/react-router'
import { useUserStore } from '@/stores/userStore.ts'
import { Button } from '@/components/ui/button'

export default function UserMenu() {
  const { resetUserAuth } = useUserStore()
  const navigate = useNavigate()

  const handleLogOut = () => {
    resetUserAuth()
    navigate({
      to: '/login',
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative h-8 w-8 rounded-full" variant="ghost">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/images/02.png" alt="" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Elon</p>
            <p className="text-xs leading-none text-muted-foreground">
              musk@spacex.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Fire all team
            <DropdownMenuShortcut>⌘Del</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Launch a rocket
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Buy Dogecoin
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
