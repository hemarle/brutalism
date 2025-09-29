import Image from 'next/image';
import React from 'react'

interface ProfileProps {
    image:string;
    name:string;
    role:string;
}
function Profile({ image, name, role }: ProfileProps) {
  return (
    <div className='flex items-center space-x-2'>
        <div className="">

      <Image src={image} alt="Profile Image" width={50} height={50} className="rounded-full"/>
        </div>
      <div className="">
        
      <h4 className='text-sm'>{name}</h4>
      <p className='text-xs'>{role}</p>
      </div>
    </div>
  )
}

export default Profile
