import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import MenuTemas from '@/components/MenuTemas'
import { useEffect } from 'react'

export default function MenuSandias() {
  return (
    <div className='relative overflow-hidden font-mont '>
      <Navbar />
      <Background />
      <div className='absolute top-20 left-0 w-full z-20'>
        <div className='bg-oldwhite/70 shadow-lg p-5 rounded-lg m-5'>
          <MenuTemas/>
        </div>
      </div>
    </div>
  )
}
