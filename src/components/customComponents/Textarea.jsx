import React from 'react';

export default function Textarea({ label, ...rest }) {
  return (
    <>
      {label && (
        <label htmlFor={label} className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
          {label}
        </label>
      )}

      <textarea
        id='description'
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        rows={7}
        {...rest}
      />
    </>
  );
}
