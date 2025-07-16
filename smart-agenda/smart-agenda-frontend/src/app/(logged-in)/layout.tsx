'use client';

import ThemeToggle from '@/components/ui/theme-toggle';

type Props = {
  children: React.ReactNode;
};

export default function LoggedInLayout({ children }: Props) {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <div className='bg-muted overflow-auto p-4'>side panel</div>
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4'>Header</h1>
        {children}
      </div>
      <ThemeToggle className='fixed right-2 top-1/2' />
    </div>
  );
}
