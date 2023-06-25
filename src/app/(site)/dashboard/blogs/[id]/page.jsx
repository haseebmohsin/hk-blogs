import React from 'react';
import Image from 'next/image';
import Loader from '@/components/Loader';
import { blogPosts } from '@/data/data';

const IndividualBlog = ({ params }) => {
  const id = params.id;

  // Find the blog post based on the id
  const blog = blogPosts?.find((post) => post._id === parseInt(id));

  const { title, content, author, category, tags, datePublished, likes, image } = blog;
  const formattedDate = new Date(datePublished).toLocaleDateString();

  if (!blog) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-6'>
          <h1 className='text-3xl font-semibold mb-2'>{title}</h1>
          <div className='flex items-center text-sm text-gray-500'>
            <div className='flex justify-center items-center gap-2'>
              <div>
                <Image src={image} alt={title} width={10} height={10} className='h-10 w-10 object-cover mb-4 rounded-full' />
              </div>

              <div className='mr-2'>
                By <span className='font-semibold'>{author}</span>
              </div>
            </div>
            <span className='mr-2'>Category: {category}</span>
            <span className='mr-2'>Published: {formattedDate}</span>
            <span className='text-sm text-gray-500 mr-2'>{likes} Likes</span>
          </div>
        </div>
        <div className='mb-6'>
          <Image src={image} alt={title} width={800} height={500} className='w-full object-cover rounded' />
        </div>
        <div className='prose max-w-none'>
          <p>{content}</p>
        </div>
        <div className='mt-6'>
          {tags.map((tag) => (
            <span key={tag} className='px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs mr-2'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
