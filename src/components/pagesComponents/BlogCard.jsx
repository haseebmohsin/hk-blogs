import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ post }) => {
  const { _id, title, content, author, category, tags, datePublished, likes, image } = post;

  const formattedDate = new Date(datePublished).toLocaleDateString();

  return (
    <div className='bg-white rounded shadow-md p-6'>
      <Link href={`/dashboard/blogs/${_id}`}>
        <Image src={image} alt={title} width={400} height={200} className='w-full h-40 object-cover mb-4 rounded' />
      </Link>

      <h2 className='text-xl font-semibold mb-2'>
        <Link href={`/dashboard/blogs/${_id}`}>{title}</Link>
      </h2>

      <p className='text-gray-600 mb-4'>{content.length > 150 ? `${content.slice(0, 150)}...` : content}</p>

      <div className='flex items-center justify-between text-sm text-gray-500'>
        <div className='flex'>
          <Image src={image} alt={title} width={30} height={30} className='w-full h-40 object-cover mb-4 rounded' />
          <span className='mr-2'>
            By <span className='font-semibold'>{author}</span>
          </span>
        </div>

        <div className='flex'>
          <span className='mr-2'>Category: {category}</span>
        </div>
      </div>

      <div className='flex items-center mt-4'>
        <span className='text-sm text-gray-500 mr-2'>{likes} Likes</span>

        {tags.map((tag) => (
          <span key={tag} className='px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs mr-2'>
            {tag}
          </span>
        ))}
      </div>

      <div className='mr-2 mt-6'>Published: {formattedDate}</div>
    </div>
  );
};

export default BlogCard;
