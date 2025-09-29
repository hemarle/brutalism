import React from 'react'
import Profile from './profile'
import ComposeEmail from './compose-email'
import Options from './options'

function Sidebar() {
  return (
    <div className='flex flex-col gap-4 '>
      <Profile image="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" name="John Doe" role="Software Engineer"/>
      <ComposeEmail />
      <Options/>
    </div>
  )
}

export default Sidebar
