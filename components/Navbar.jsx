import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false)
  // const token = localStorage.getItem("token")

  // useEffect(()=>{
  //   token && setIsLogged(true)
  // }, [token])

  return (
    <>
      <nav className='w-full h-16 bg-[#FF9D30] p-'></nav>
    </>
  )
}
