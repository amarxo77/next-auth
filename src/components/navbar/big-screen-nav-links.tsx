import NavbarLinks from './links';

type BigScreenNavLinksProps = {
  session: boolean;
  isAdmin: boolean;
};

export default function BigScreenNavLinks({
  isAdmin,
  session,
}: BigScreenNavLinksProps) {
  return (
    <nav className='hidden md:flex md:items-center'>
      <NavbarLinks
        isAdmin={isAdmin}
        session={session}
        className='flex items-center'
      />
    </nav>
  );
}
