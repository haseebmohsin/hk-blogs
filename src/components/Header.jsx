'use client';

import Router, { useRouter } from 'next/navigation';
// import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const route = useRouter();
  // const { data: session, status } = useSession();

  const handleRoute = (path) => {
    route.push(path);
  };

  const isDashboardPage = route.pathname === '/dashboard';

  return (
    <div className='relative'>
      <nav className='fixed top-0 z-50 w-full px-12 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <Image src='/agri-logo.png' alt='logo' width={55} height={40} />

              <div className='flex justify-center items-center gap-6 ml-16'>
                <div className='flex justify-center items-center cursor-pointer' onClick={() => handleRoute('/dashboard')}>
                  <Image src='/svg/home.svg' alt='home' width={25} height={25} />
                  <p className='text-center mx-3'>Home</p>
                </div>

                {!isDashboardPage && (
                  <>
                    <div className='flex justify-center items-center cursor-pointer' onClick={() => handleRoute('/inventory')}>
                      <Image src='/svg/inventory.svg' alt='Inventory' width={25} height={25} />
                      <p className='text-center mx-3'>Inventory</p>
                    </div>

                    <div className='flex justify-center items-center cursor-pointer' onClick={() => handleRoute('/purchases')}>
                      <Image src='/svg/purchases.svg' alt='purchases' width={25} height={25} />
                      <p className='text-center mx-3'>Purchases</p>
                    </div>

                    <div className='flex justify-center items-center cursor-pointer' onClick={() => handleRoute('/crops')}>
                      <Image src='/svg/crops.svg' alt='crops' width={25} height={25} />
                      <p className='text-center mx-3'>Crops</p>
                    </div>

                    <div
                      className='flex justify-center items-center cursor-pointer'
                      onClick={() => handleRoute('/cropsUtilization')}>
                      <Image src='/svg/schedule.svg' alt='schedule' width={25} height={25} />
                      <p className='text-center mx-3 whitespace-nowrap'>All Schedules</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div
              className='flex justify-center items-center cursor-pointer'
              onClick={async () => {
                const data = await signOut({ redirect: false, callbackUrl: '/' });
                Router.push(data.url);
              }}>
              <Image src='/svg/logout.svg' alt='logout' width={25} height={25} />

              <p className='ml-2 select-none whitespace-nowrap'>Sign out</p>
            </div>
          </div>
        </div>
      </nav>

      {/* hero image */}
      <div className='relative w-full h-[260px]'>
        <Image src='/images/hero-img.jpg' alt='logo' fill className='object-cover' />
      </div>
    </div>
  );
}
