'use client';

import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/customComponents/Input';

export default function Login() {
  const session = useSession();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    password: Yup.string().required('Please enter you password'),
  });

  const { handleSubmit, handleChange, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      signIn('credentials', { ...values, redirect: false })
        .then((callback) => {
          setSubmitting(true);

          if (callback?.error) {
            toast.error(callback.error);
          }

          if (callback?.ok && !callback?.error) {
            toast.success('Logged in successfully!');
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image className='mx-auto h-20 w-auto' src='/hk-logo.png' alt='logo' width={60} height={60} />

          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in to your account</h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <div className='mt-2'>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  label='Email address'
                  autoComplete='email'
                  value={values.email}
                  onChange={handleChange}
                />
                {touched.email && errors.email && <p className='m-1 text-sm text-red-500'>{errors.email}</p>}
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>

                <div className='text-sm'>
                  <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className='mt-2'>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  value={values.password}
                  onChange={handleChange}
                />
                {touched.password && errors.password && <p className='m-1 text-sm text-red-500'>{errors.password}</p>}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <h1 className='my-4 text-center'>or</h1>

          <button
            className='px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 w-full'
            onClick={() => signIn('google')}>
            <Image src='https://www.svgrepo.com/show/475656/google-color.svg' alt='google logo' width={20} height={20} />

            <span className='mx-auto'>Login with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
