"use client"
import React from 'react'
import { Button } from '../ui/button'

function TimelineTab() {

  return (
    <div className='border-2 rounded flex font-semibold'>
      <Button size='sm' className='cursor-pointer px-4 py-1 text-green-700 shadow-lg'>7 Days</Button>
      <Button size='sm' className='cursor-pointer border-l-2 border-r-2 rounded-none px-4 py-2'>14 Days</Button>
      <Button size='sm' className='cursor-pointer px-4 py-1'>1 Month</Button>
    </div>
  )
}

export default TimelineTab
