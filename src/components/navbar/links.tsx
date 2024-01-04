import { links } from '@/app/constants';
import NavLink from './nav-link';

type NavbarLinksProps = {
  session: boolean;
  isAdmin: boolean;
  className?: string;
  onClick?: () => void;
};

export default function NavbarLinks({
  className,
  isAdmin,
  session,
  onClick,
}: NavbarLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            onClick={onClick}
          />
        </li>
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink href='/admin' label='Admin' />}
          <button className='rounded-sm bg-blue-500 p-[0.3rem] font-semibold text-white'>
            Logout
          </button>
        </>
      ) : (
        <NavLink href='/login' label='Login' />
      )}
    </ul>
  );
}
