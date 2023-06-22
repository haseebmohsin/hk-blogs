import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Welcome to HK Blogs</h1>

      <Link href='/dashboard/blogs'>
        <div className='text-center'>Go to Blogs</div>
      </Link>
    </div>
  );
};

export default DashboardPage;
