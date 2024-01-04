import Link from 'next/link';
import BigScreenNavLinks from './big-screen-nav-links';
import SmallScreenNavLinks from './small-screen-nav-links';

export default function Navbar() {
  //TEMP
  const session = true;
  const isAdmin = true;
  return (
    <header className='flex h-24 items-center justify-between'>
      <Link href='/' className='text-3xl font-bold'>
        Logo
      </Link>
      <BigScreenNavLinks isAdmin={isAdmin} session={session} />
      <SmallScreenNavLinks isAdmin={isAdmin} session={session} />
    </header>
  );
}
