import {
  Calendar,
  Home,
  Inbox,
  CalendarDays,
  Settings,
  Calendar1,
  LogOut,
  Bell,
  User,
  EllipsisVerticalIcon,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeToggle from '@/components/ui/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '/inbox',
    icon: Inbox,
  },
  {
    title: 'Calendário',
    url: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Agendamento',
    url: '/schedule',
    icon: CalendarDays,
  },
];

const user = {
  name: 'Diogo Saran',
  email: 'diogosaran@example.com',
  avatar: 'https://github.com/xdiogoxd.png',
};

type AppSidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function AppSidebar({ className }: AppSidebarProps) {
  const pathName = usePathname();
  return (
    <Sidebar className={cn('flex flex-col h-full', className)}>
      <SidebarHeader>
        <SidebarMenu className='flex flex-col gap-2 items-center'>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <a href='#'>
                <Calendar1 size={25} color='var(--primary)' />
                <h3 className='font-bold'>Smart Agenda</h3>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator className='p2' />
      </SidebarHeader>
      <SidebarContent className='flex-grow'>
        <nav>
          <SidebarGroup>
            <SidebarGroupLabel>Navegação</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathName === item.url}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </nav>
      </SidebarContent>

      <SidebarFooter className='mt-auto pb-5'>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex w-full justify-end mb-1'>
              <ThemeToggle />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size='lg'
                  className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                >
                  <Avatar className='h-8 w-8 rounded-lg grayscale'>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                  </Avatar>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>{user.name}</span>
                    <span className='text-muted-foreground truncate text-xs'>
                      {user.email}
                    </span>
                  </div>

                  <EllipsisVerticalIcon className='ml-auto size-4' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <nav>
                <DropdownMenuContent
                  className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                  // side={isMobile ? 'bottom' : 'right'}
                  align='end'
                  sideOffset={4}
                >
                  <DropdownMenuLabel className='p-0 font-normal'>
                    <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                      <Avatar className='h-8 w-8 rounded-lg'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className='rounded-lg'>
                          DS
                        </AvatarFallback>
                      </Avatar>
                      <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate font-medium'>
                          {user.name}
                        </span>
                        <span className='text-muted-foreground truncate text-xs'>
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href='/account'
                        className='flex items-center gap-2 w-full'
                      >
                        <User size={18} />
                        Conta
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href='/notifications'
                        className='flex items-center gap-2 w-full'
                      >
                        <Bell size={18} />
                        Notificações
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href='/settings'
                        className='flex items-center gap-2 w-full'
                      >
                        <Settings />
                        Configurações
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href='/' className='flex items-center gap-2 w-full'>
                      <LogOut />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </nav>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
