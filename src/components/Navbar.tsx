import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" aria-label="Home">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65441f09edf0fe6e1cdc551e/be84ec6a-2b9c-4e6e-bc7e-57f4ad9e5dc5/White_Accent.png"
          width={32}
          height={32}
          alt="Yoom Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-slate-500 max-sm:hidden">
          Orchestro AI
        </p>
      </Link>
      
      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/signin" className="text-slate-200 hover:text-white transition">
            Sign In
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
