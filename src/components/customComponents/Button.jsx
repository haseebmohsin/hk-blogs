import React from 'react';
import Loader from '../Loader';

export default function Button({ children, className, isLoading, checkAuthLoading, ...rest }) {
  const buttonClassNames = `
    px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg whitespace-nowrap hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
      isLoading ? 'opacity-50 cursor-not-allowed' : ''
    } ${className} `;

  return (
    <>
      <button type='submit' className={buttonClassNames} disabled={isLoading || checkAuthLoading} {...rest}>
        {isLoading ? (
          <div className='flex items-center justify-center'>
            <Loader color='white' height='20' isLoading={isLoading} />
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}
