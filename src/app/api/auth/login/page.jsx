'use client';
import { useEffect, useState } from 'react';
import { loginUser } from '@/helpers';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import Button from '@/components/customComponents/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checkAuthLoading, setCheckAuthLoading] = useState(true);

  if (status === 'authenticated') {
    router.push('/dashboard');
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      setCheckAuthLoading(false);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await loginUser({ email, password });

    if (res.error) {
      setError('Invalid Credentials');
    } else {
      router.push(res.url);
    }

    setIsLoading(false);
  };

  return (
    <>
      <section className='bg-white'>
        <div
          className={`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ${
            checkAuthLoading ? 'opacity-30' : 'opacity-100'
          }`}>
          <div className='mb-14'>
            <Image src='/hkblogs-logo.png' alt='logo' width={180} height={180} />
          </div>

          <div className='w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign in to your account
              </h1>

              <form className='space-y-4 md:space-y-6'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Email
                  </label>

                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>

                  <input
                    type='password'
                    name='password'
                    id='password'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && <div className='text-lg text-red-600'>{error}</div>}

                <Button className='w-full py-3' isLoading={isLoading} checkAuthLoading={checkAuthLoading} onClick={handleSubmit}>
                  Sign In
                </Button>
              </form>
            </div>

            {/* Loader */}
            {checkAuthLoading && (
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <Loader height='150' />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
