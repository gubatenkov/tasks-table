import { buttonVariants } from '@/components/ui/button.tsx'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import UserMenu from '@/components/UserMenu.tsx'
import { cn } from '@/lib/utils.ts'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div
        className="container flex h-14 items-center justify-between px-4
        sm:px-8"
      >
        <div />

        <div className="flex items-center">
          <a
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'mr-4 !h-9 px-2.5'
            )}
            href="https://github.com/gubatenkov/"
            target="_blank"
          >
            <GitHubLogoIcon height={16} width={16} />
          </a>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
