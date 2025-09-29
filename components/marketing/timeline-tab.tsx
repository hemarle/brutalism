"use client"
import React from 'react'
import { Button } from '../ui/button'

function TimelineTab() {

  return (
    <div className='border  flex'>
      <Button className='px-4 py-2 text-green-700'>7 Days</Button>
      <Button className='border-l border-r rounded-none px-4 py-2'>14 Days</Button>
      <Button className='px-4 py-2'>1 Month</Button>
    </div>
  )
}

export default TimelineTab
