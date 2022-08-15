import React, { useState, useEffect} from 'react'
import { getCategories } from '../services';
import Link from 'next/link';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  
  }, []);

  return (
    <div className='container mx-auto px-10 mb-5 mt-0'> 
<div className='w-full inline-block py-4 border-gray-300 '>
            <div className='md:float-left block'> 
                <Link href="/">
                    <span className="cursor-pointer text-3xl text-color-header">
                    💻 Chakrit's Coding Room
                    </span>
                </Link>
            </div>
            {/* <div className="hidden md:float-left md:contents">
                {categories.map((categories) => (
                    <Link key={categories.slug} href={`/category/${categories.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-color-white ml-4 cursor-pointer transition duration-100 transform hover:-translate-y-1">
                            {categories.name}
                        </span>
                    </Link>
                ))}
            </div>  */}
        </div>
    </div>

  )
}

export default Header