'use client';

import MenuTitle from '@/components/ui/MenuTitle';
import AppSidebar from '../../components/ui/AppSideBar';
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar';

type Props = {
  children: React.ReactNode;
};

function LayoutContent({ children }: Props) {
  const { isMobile } = useSidebar();

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        {isMobile && (
          <div className='p-4 flex justify-between sticky top-0 left-0 bg-background border-b border-border'>
            <MenuTitle />
            <SidebarTrigger />
          </div>
        )}
        <div className='flex flex-col h-full p-4 w-full max-w-full'>
          <h1 className='pb-4 w-full'>Header</h1>
          <div className='flex-1 overflow-auto w-full max-w-full'>
            {children}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}

export default function LoggedInLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
