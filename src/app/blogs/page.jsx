import React from 'react';
import BlogCard from '@/components/pagesComponents/BlogCard';
import { blogPosts } from '@/data/data';

const BlogsPage = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Welcome to HK Blogs</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {blogPosts?.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
