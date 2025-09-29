import Link from 'next/link'
import React from 'react'
import Logo from './sidebar/logo'
import UpgradeToProCard from './sidebar/upgrade-to-pro-card'
import Navlinks from './sidebar/navlinks'

function Sidebar() {
  return (
    <nav className="p-4 flex flex-col gap-8 border-r  max-w-44">
      <Link href="/">
        <Logo />
      </Link>
      
      <Navlinks />

      <UpgradeToProCard />
    </nav>
  )
}

export default Sidebar
