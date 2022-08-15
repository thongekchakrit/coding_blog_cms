import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getFeaturedPosts } from '../services';


const PostWidget = ({ categories, slug }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getFeaturedPosts( categories , slug).then((result) => setFeaturedPosts(result))
    } else {
      getFeaturedPosts().then((result) => setFeaturedPosts(result))
    }
  }, [slug]);

  return (
    <div className='post-card-bg shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-8'>
        {"Featured Posts"}
      </h3>
      {featuredPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-8'>
          {/* <div className='w-16 flex-none'>
            <img 
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded'
              src={post.featuredImage.url}
            />
          </div> */}
          <div className='flex-grow ml-4 text-color-white'>
          <p className='text-gray-500 font-xs'>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </p>
          <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
            {post.title}
          </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget