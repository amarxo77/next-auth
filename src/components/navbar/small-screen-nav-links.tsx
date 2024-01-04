'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GiSplitCross } from 'react-icons/gi';
import NavbarLinks from './links';
import menuImg from '/public/menu.png';

type SmallScreenNavLinksProps = {
  isAdmin: boolean;
  session: boolean;
};

export default function SmallScreenNavLinks({
  isAdmin,
  session,
}: SmallScreenNavLinksProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='md:hidden'>
      <button onClick={openSidebar}>
        <Image src={menuImg} alt='menu image' width={28} height={28} />
      </button>
      <div
        className={`fixed right-0 top-0 z-10 grid h-full w-3/4 place-items-center bg-stone-950 transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={closeSidebar} className='absolute right-12 top-7'>
          <GiSplitCross className='w-5 h-5' />
        </button>
        <NavbarLinks
          isAdmin={isAdmin}
          session={session}
          onClick={closeSidebar}
          className='flex -translate-y-1/2 flex-col items-center justify-center gap-4'
        />
      </div>
    </div>
  );
}
