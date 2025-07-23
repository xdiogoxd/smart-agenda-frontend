'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MyInbox from './components/MyInbox';
import TeamInbox from './components/TeamInbox';

export default function InboxPage() {
  return (
    <div className='h-full flex flex-col'>
      <Tabs defaultValue='myInbox' className='flex flex-col h-full w-full'>
        <TabsList className='grid grid-cols-2 gap-2 mb-4'>
          <TabsTrigger value='myInbox'>Minha Inbox</TabsTrigger>
          <TabsTrigger value='teamInbox'>Inbox da Equipe</TabsTrigger>
        </TabsList>
        <TabsContent
          value='myInbox'
          className='flex-1 overflow-auto w-full'
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <MyInbox />
        </TabsContent>
        <TabsContent
          value='teamInbox'
          className='flex-1 overflow-auto w-full'
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TeamInbox />
        </TabsContent>
      </Tabs>
    </div>
  );
}
