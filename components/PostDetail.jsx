import React from 'react';
import moment from 'moment';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {

    if (obj.type == 'paragraph') {
      for (var i = 0; i < obj.children.length; i++) {
        if ('type' in obj.children[i] & 'href' in obj.children[i] ) {
          obj = obj.children[i];
          type = 'link';
        }
      }
    }

    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }
 
    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'code-block':
        return (<pre className='box-language-text'><code className='language-text'>{modifiedText}</code></pre>
          );
      case 'undefined':
        
        return (
          null
        )
      case 'link':
        return (
          <a href={obj.href} target="_blank">{obj.children[0].text}</a>
        )
        case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="image-center"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="post-card-bg shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <Image src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full justify-center">
            <div className="hidden md:flex items-center lg:mb-0 lg:w-auto mr-8 items-center">
              <Image
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-color-white ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-500 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 16 16" stroke="currentColor">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;