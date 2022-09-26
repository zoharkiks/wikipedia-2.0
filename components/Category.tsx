import React from 'react'

const Category = ({category,image}:{category:string,image:string}) => {
  return (
    <div className=' hover:shadow-lg transition-all cursor-pointer hover:scale-[1.1] flex justify-center font-calibri items-center   md:justify-between px-6 border border-gray-300 rounded-full py-4 md:py-1 md:pr-6 md:pl-2 text-sm md:text-xs text-gray-500'>
      <img className='hidden md:inline-flex rounded-full h-10 object-cover  w-1/2 ' src={image} alt="category" />
    <span className='md:text-lg'>
    {category} (887878)
      </span>   </div>
  )
}

export default Category