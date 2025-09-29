import EmailList from '@/components/apps/email/email-list'
import MobileEmailLayout from '@/components/apps/email/MobileEmailLayout'
import Sidebar from '@/components/apps/email/sidebar'
// import MobileEmailLayout from '@/components/apps/email/MobileEmailLayout'
import React from 'react'

function Email() {
  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileEmailLayout>
          <EmailList/>
        </MobileEmailLayout>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex border-padded space-x-8 bg-white'>
        <div className="w-44 flex-shrink-0">
          <Sidebar/>
        </div>
        <div className="flex-1 min-w-0">
          <EmailList/>
        </div>
      </div>
    </>
  )
}

export default Email
