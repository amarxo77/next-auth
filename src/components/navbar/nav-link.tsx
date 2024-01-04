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
      } rounded-2xl px-4 py-[0.3rem] text-center font-medium`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
