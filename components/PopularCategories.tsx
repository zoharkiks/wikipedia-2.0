import React from 'react'
import Category from './Category'

const PopularCategories = () => {
  return (
    <div className='flex flex-col w-full'>
         <h1 className=" font-calibri text-3xl  ">
          Popular Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-10 ">
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
          <Category image='https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg' category='History'/>
        
        </div>
    </div>
  )
}

export default PopularCategories