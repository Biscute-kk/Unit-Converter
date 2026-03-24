'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: 'Length', href: '/length' },
  { name: 'Temperature', href: '/temperature' },
  { name: 'Weight', href: '/weight' }
];

export default function Navlinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 p-4 bg-white shadow-md rounded-xl w-fit mx-auto mt-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                isActive
                  ? 'bg-blue-500 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}