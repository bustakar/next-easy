'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const data = {
  items: [
    {
      title: 'Playground',
      url: '/dashboard',
      icon: SquareTerminal,
    },
    {
      title: 'Models',
      url: '/models',
      icon: Bot,
    },
    {
      title: 'Documentation',
      url: '/documentation',
      icon: BookOpen,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
    },
  ],
};

export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {data.items.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={pathname === item.url}
            >
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
