import EmailList from '@/components/apps/email/email-list'
import MobileEmailLayout from '@/components/apps/email/MobileEmailLayout'
import Sidebar from '@/components/apps/email/sidebar'
import React,{ Suspense }  from 'react'
function Email() {
  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileEmailLayout>
            <Suspense fallback={<div>Loading...</div>}>
          <EmailList/>
           </Suspense> </MobileEmailLayout>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex border-padded space-x-8 bg-white'>
        <div className="w-44 flex-shrink-0">
          <Sidebar/>
        </div>
        <div className="flex-1 min-w-0">
           <Suspense fallback={<div>Loading...</div>}>
          <EmailList/>
           </Suspense>
        </div>
      </div>
    </>
  )
}

export default Email
