import React from 'react'

const Category = ({category}:{category:string}) => {
  return (
    <div className='flex  border rounded-full p-2 text-sm md:text-xs text-gray-500'>{category}</div>
  )
}

export default Category