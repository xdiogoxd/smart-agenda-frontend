'use client';

import ThemeToggle from '@/components/ui/theme-toggle';

type Props = {
  children: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className='flex flex-col gap-4 min-h-screen items-center justify-center p-24'>
      {children}
      <ThemeToggle className='fixed right-2 top-1/2' />
    </div>
  );
}
