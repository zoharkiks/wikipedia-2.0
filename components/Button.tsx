import React from 'react'
import { Icon } from "@iconify/react";


const Button = ({style}:{style:string}) => {
  return (
    <div className={`flex items-center space-x-4 cursor-pointer font-calibriBold ${style}` }>
        <h2>Read More</h2>
        <Icon icon="bytesize:arrow-right"  />

    </div>
  )
}

export default Button