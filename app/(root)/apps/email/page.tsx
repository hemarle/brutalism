import EmailList from '@/components/apps/email/email-list'
import Sidebar from '@/components/apps/email/sidebar'
import React from 'react'

function Email() {
  return (
    <div className='border-padded flex space-x-8 bg-white '>
    <div className="w-64">
      <Sidebar/>
    </div>
    <EmailList/>
    </div>
  )
}

export default Email
