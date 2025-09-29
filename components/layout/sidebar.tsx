import Link from 'next/link'
import React from 'react'
import Logo from './sidebar/logo'
import UpgradeToProCard from './sidebar/upgrade-to-pro-card'
import Navlinks from './sidebar/navlinks'

function Sidebar() {
  return (
    <nav className="p-4 flex flex-col gap-8 md:border-r  md:max-w-52">
      <Link href="/">
        <Logo />
      </Link>
      
      <Navlinks />
<div className="md:w-44">

      <UpgradeToProCard />
</div>
    </nav>
  )
}

export default Sidebar
