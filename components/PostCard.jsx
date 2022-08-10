import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { FaBeer  } from "react-icons/io";

const PostCard = ({ post }) => {

  return (
    <a href={`/post/${post.slug}`} >
    <div className='post-card-bg shadow-lg rounded-lg p-0 lg:p-5 pb-5 mb-5 div_hover '>
      <div className='relative overflow-hidden shadow-md pb-80 mb-4 ' >
        <img 
          src = {post.featuredImage.url}
          alt= {post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />

      </div>
      <div className='font-medium text-color-white text-center mb-6'>
        <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
        </div>
      <h1 className='text-center text-white mb-5 text-2xl font-semibold'>
      {post.title}
      </h1>
      {/* <div className='bloc lg-flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="aligh-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className='inline align-middle text-color-white ml-2 text-lg'>{post.author.name}</p>
          </div>
      </div> */}
      <p className='relative overflow-hidden text-center text-lg text-color-white font-normal px-4 lg:px-10 mb-8'> {post.excerpt}</p>
      {/* <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-100 transform hover:-translate-y-1 inline-block text-lg font-medium text-white px-8 py-3 cursor-pointer'>
            Continue reading...
          </span>
        </Link>
      </div> */}
    </div>
    </a>
  )
}

export default PostCard