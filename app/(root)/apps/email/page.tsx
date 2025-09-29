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
          <Suspense fallback={<div aria-live="polite">Loading emails...</div>}>
            <EmailList/>
          </Suspense> 
        </MobileEmailLayout>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex border-padded space-x-8 bg-white'>
        <aside className="w-44 flex-shrink-0" aria-label="Email navigation">
          <Sidebar/>
        </aside>
        <main className="flex-1 min-w-0" role="main" aria-label="Email list">
          <Suspense fallback={<div aria-live="polite">Loading emails...</div>}>
            <EmailList/>
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default Email
