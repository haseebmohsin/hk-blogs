'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Loader from './Loader';

const Header = () => {
  const navItems = ['Home', 'Blogs'];

  const { data: session, status } = useSession();
  const profileDropdownRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='bg-gray-700 py-4 px-8 flex items-center justify-between'>
      <div className='flex items-center'>
        <span className='text-xl font-bold text-white'>HK Blogs</span>

        <nav className='hidden md:flex ml-8 space-x-8 text-white'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.toLowerCase() === 'home' ? '/dashboard' : `/dashboard/${item.toLowerCase()}`}
              className='hover:text-gray-300'>
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div className='hidden md:flex items-center'>
        <div className='relative group text-white' ref={profileDropdownRef}>
          {!session ? (
            <div>
              <Loader color='white' height='30' />
            </div>
          ) : (
            <button className='flex items-center space-x-2 focus:outline-none' onClick={toggleProfileDropdown}>
              <span className='text-white'>{session?.user.email}</span>

              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                <path fillRule='evenodd' d='M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z' />
              </svg>
            </button>
          )}

          {isProfileOpen && (
            <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl'>
              <Link href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                Profile
              </Link>

              <span onClick={() => signOut()} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                Logout
              </span>
            </div>
          )}
        </div>
      </div>

      <div className='md:hidden relative'>
        <button className='text-gray-400 hover:text-white focus:outline-none' onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>

        {isMenuOpen && (
          <div className='mt-2 py-2 w-full shadow-xl fixed inset-x-0 top-14 bg-gray-700'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.toLowerCase() === 'home' ? '/dashboard' : `/dashboard/${item.toLowerCase()}`}
                className='hover:text-gray-300'>
                {item}
              </Link>
            ))}

            <div>
              <Link href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                Profile
              </Link>

              <span onClick={() => signOut()} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'>
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
