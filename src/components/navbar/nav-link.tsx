'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkComponentProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function NavLink({
  href,
  label,
  onClick,
}: NavLinkComponentProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'active-link' : ''
      } rounded-lg px-[1.2rem] py-[0.5rem] text-center font-medium`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
