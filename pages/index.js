import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPostCard } from '../components';
import { FeaturedPosts } from '../sections';
import Script from 'next/script';

export default function  Home({ posts }) {

  return (

    <div className="container mx-auto px-5 mb-5"> 
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <title>Chakrit's Coding Room</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className='grid grid-cols-4 lg:grid-cols-4 gap-5 flex flex-col'>
        <div className="col-span-3 grid grid-cols-2 gap-5">
          {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
        <div className="lg:col-span-1 col-span-1">
          <div className="lg:sticky relative top-5">
            <FeaturedPostCard />
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>

    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  return {
    props: { posts },
  };
}
// test

