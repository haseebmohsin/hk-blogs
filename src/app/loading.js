'use client';

import { ProgressBar } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <ProgressBar
        height='80'
        width='80'
        ariaLabel='progress-bar-loading'
        wrapperStyle={{}}
        wrapperClass='progress-bar-wrapper'
        borderColor='#F4442E'
        barColor='#51E5FF'
      />
    </div>
  );
}
