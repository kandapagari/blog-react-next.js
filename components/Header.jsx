import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [
    { name: 'React', slug: 'react' },
    { name: 'Python', slug: 'python' },];

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-yellow-400 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Pavan Kumar Kandapgari
                        </span>
                    </Link>
                </div>
                <div className='hiddent md:float-left md:contents'>
                    {categories.map((category => (
                        <Link href={`/categories/${category.slug}`} key={category.slug}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    )))}
                </div>
            </div>
        </div>
    );
}

export default Header