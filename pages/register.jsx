import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Register() {
  const defaultBackground = 'bg-booksflying.webp'
  const [background, setBackground] = useState('bg-booksflying.webp')

  return (
    <div
      className=' min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat overflow-hidden'
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <div className='w-full min-h-screen flex flex-col gap-2 font-mont font-bold'>
        <Navbar />
        <div className='mx-auto h-4/5 w-[350px] md:w-4/5 lg:w-1/2  py-10 md:py-20 flex justify-center'>
          <div className='grid py-10 bg-grey/30 rounded-[50px] w-80 md:w-[424px]'>
          <SignInButton mode='modal' forceRedirectUrl='/randomlandia'>
              <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
                <p className='text-natD font-lucky text-2xl'>
                  registrate con:
                </p>
                <div className='flex gap-6 mb-4'>
                  <Image
                    src='fb_icon.svg'
                    width={40}
                    height={40}
                    alt='facebook'
                  ></Image>
                  <Image
                    src='google_icon.svg'
                    width={40}
                    height={40}
                    alt='google'
                  ></Image>
                  <Image
                    src='tiktok_icon.svg'
                    width={40}
                    height={40}
                    alt='tiktok'
                  ></Image>
                </div>
              </div>
            </SignInButton>
            
            <div className='flex justify-center pt-6'>
              <div className='border-t-2 border-gray-800 w-20 md:w-32 max-w-xs'></div>
              <p className='w-auto text-black -translate-y-2.5 text-center px-2'>
                O
              </p>
              <div className='border-t-2 border-gray-800 w-20 md:w-32 max-w-xs'></div>
            </div>
            <form
              action='submit'
              className='mx-auto grid gap-7 text-sm font-bold'
            >
              <div className='grid gap-2'>
                <div className='grid gap-0.5'>
                  <label
                    htmlFor='user'
                    className='px-16 py-4 font-ram text-xl text-natD text-center'
                  >
                    ¡Únete a la manada!
                  </label>
                  <div className='flex gap-2 font-bold justify-center'>
                    <img src='/account_circle.svg' alt='' className='w-9 h-9' />
                    <input
                      type='text'
                      name='user'
                      placeholder='Nombre del usuario'
                      className='w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70'
                    />
                  </div>
                </div>
                <div className='grid gap-0.5'>
                  <div className='flex gap-2 font-bold justify-center'>
                    <img src='/mail.svg' alt='' className='w-9 h-9' />
                    <input
                      type='email'
                      name='email'
                      placeholder='Correo'
                      className='w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70'
                    />
                  </div>
                </div>
                <div className='grid gap-0.5'>
                  <div className='flex gap-2 font-bold justify-center'>
                    <img src='/lock.svg' alt='' className='w-9 h-9' />
                    <input
                      type='password'
                      name='password'
                      placeholder='Contraseña'
                      className='w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70'
                    />
                  </div>
                </div>
                <div className='grid gap-0.5'>
                  <div className='flex gap-2 font-bold justify-center'>
                    <img src='/password.svg' alt='' className='w-9 h-9' />
                    <input
                      type='password'
                      name='confirm-password'
                      placeholder='Repite tu contraseña'
                      className='w-60 rounded-xl px-3 outline-lorange/50 outline-offset-1 shadow-md bg-lorange/70'
                    />
                  </div>
                </div>
              </div>
              <div className='grid justify-center gap-3'>
                <button
                  type='submit'
                  className='bg-agreen p-1.5 w-40 m-auto font-lucky text-white text-xl tracking-wider rounded-full'
                >
                  enviar
                </button>
                <Link
                  href='./login'
                  className='text-natD underline text-center'
                >
                  INICIAR SESIÓN
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
