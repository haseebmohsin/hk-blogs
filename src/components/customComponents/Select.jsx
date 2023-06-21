import React from 'react';

export default function Select() {
  return (
    <div className='w-1/2'>
      <select
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option defaultValue>Choose Channel</option>
        <option value='geo'>Geo News</option>
        <option value='ary'>Ary News</option>
        <option value='samma'>Samma News</option>
        <option value='Dunya'>Dunya News</option>
        <option value='92'>92 News</option>
        <option value='express'>Express News</option>
      </select>
    </div>
  );
}
