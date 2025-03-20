import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-centered'>
        <Image src="/logo.png" width={59} height={100} alt='logo' />
        <h1 className='text-5xl font-bold'>WhisperWave</h1>
        <UserButton />
        
    </div>
    
  )
}

export default AppHeader
