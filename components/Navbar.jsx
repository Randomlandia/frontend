import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false)
  // const token = localStorage.getItem("token")

  // useEffect(()=>{
  //   token && setIsLogged(true)
  // }, [token])

  return (
    <>
      <nav className='w-full h-14 bg-[#FF9D30]  flex justify-between text-white font-lucky text-xl'>
        <div>logo</div>
        <div className='flex'>
          <div className='hidden lg:flex gap-7 items-center px-3'>
            <button>NOSOTROS</button>
            <button>INICIAR SESIÓN</button>
            <button className='bg-[#E56C25] h-9 px-5 rounded-[10px]'>
              CREAR CUENTA
            </button>
            <button className='bg-[#44AA68] h-9 px-5 rounded-[10px]'>
              ¡JUGAR!
            </button>
          </div>
          <div className='flex lg:hidden items-center gap-2'>
            <button className='text-sm leading-4 bg-[#E56C25] px-6 py-2 rounded-[10px]'>INICIAR<br/>SESIÓN</button>
            <img src='/menu.svg' alt='menu' className='w-14 h-16'/>
          </div>
        </div>
      </nav>
    </>
  )
}
