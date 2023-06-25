import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen'>
        <div className='px-4 lg:py-12'>
          <div className='lg:gap-4 lg:flex'>
            <div className='flex flex-col items-center justify-center md:py-24 lg:py-32'>
              <h1 className='font-bold text-blue-600 text-9xl'>404</h1>

              <p className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
                <span className='text-red-500'>Oops!</span> Page not found
              </p>

              <p className='mb-8 text-center text-gray-500 md:text-lg'>The page you’re looking for doesn’t exist.</p>

              <Link className='px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700' href='/dashboard'>
                Go home
              </Link>
            </div>

            <div className='mt-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='object-cover w-full h-full'>
                <path d='M10 4v7m0 0v7m0-7h7m-7 0H3' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
