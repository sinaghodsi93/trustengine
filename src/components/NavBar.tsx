"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./svg/logo";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  return (
    <nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <MaxWidthWrapper>
        <div className='flex justify-between items-center h-16'>
          <Link href='/' className='font-bold text-xl'>
            <div className='flex items-center gap-0.5'>
              <Logo className='h-6 w-6 text-black dark:text-white' />
              Logo
            </div>
          </Link>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center space-x-6'>
            <Link
              href='/'
              className='text-foreground hover:text-foreground/80 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-foreground hover:text-foreground/80 transition-colors'
            >
              About
            </Link>
            <Link
              href='/services'
              className='text-foreground hover:text-foreground/80 transition-colors'
            >
              Services
            </Link>
            <Link
              href='/contact'
              className='text-foreground hover:text-foreground/80 transition-colors'
            >
              Contact
            </Link>
            {isSignedIn && (
              <Link
                href='/dashboard'
                className='text-foreground hover:text-foreground/80 transition-colors'
              >
                Dashboard
              </Link>
            )}
            <ThemeSwitcher />
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className='flex items-center space-x-2'>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Mobile menu button and theme switcher */}
          <div className='md:hidden flex items-center space-x-2'>
            <ThemeSwitcher />
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className='flex items-center space-x-1'>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            )}
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              className='h-9 w-9'
            >
              {isOpen ? (
                <X className='h-4 w-4' />
              ) : (
                <Menu className='h-4 w-4' />
              )}
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className='md:hidden border-t'>
            <div className='flex flex-col space-y-4 py-4'>
              <Link
                href='/'
                className='text-foreground hover:text-foreground/80 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-foreground hover:text-foreground/80 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href='/services'
                className='text-foreground hover:text-foreground/80 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href='/contact'
                className='text-foreground hover:text-foreground/80 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              {isSignedIn && (
                <Link
                  href='/dashboard'
                  className='text-foreground hover:text-foreground/80 transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {!isSignedIn && (
                <SignUpButton mode="modal">
                  <Button size="sm" className='w-fit'>
                    Sign Up
                  </Button>
                </SignUpButton>
              )}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
