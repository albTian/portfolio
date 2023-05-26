'use client';

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <header className="flex items-center justify-between py-2 px-6 shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/path/to/your/logo.png" alt="Logo" width={50} height={50} />
      </div>

      <nav className="hidden md:flex space-x-10">
        <Link href="/about">
          <div className="text-gray-600 hover:text-gray-800">About</div>
        </Link>
        <Link href="/animations">
          <div className="text-gray-600 hover:text-gray-800">Animations</div>
        </Link>
        <Link href="/other">
          <div className="text-gray-600 hover:text-gray-800">Other</div>
        </Link>
        <Link href="/server-protected">
          <div className="text-gray-600 hover:text-gray-800">Server protected</div>
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <a onClick={() => signOut()} className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Log Out
          </a>
        ) : (
          <a onClick={() => signIn()} className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Log In
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
