import React from 'react'
import moment from 'moment';
import Link from 'next/link';

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
      <div className='font-small text-gray-500 text-center mb-6 mt-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 16 16" stroke="currentColor">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
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