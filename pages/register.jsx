import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Register() {
  return (
    <div>
      <div className='min-h-screen bg-white flex flex-col gap-14 font-mont font-bold'>
        <Navbar />
        <div className='grid justify-items-center bg-[#d9d9d930] h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-24 px-8 mx-auto rounded-xl'>
          <form
            action='submit'
            className='w-80 md:w-[424px] pt-3 grid gap-7 text-sm font-bold'
          >
            <div className='grid gap-2'>
              <div className='grid gap-0.5'>
                <label name='email' className='px-14 '>
                  EMAIL{' '}
                </label>
                <div className='flex gap-2 font-bold'>
                  <img src='/mail.svg' alt='' className='w-10 h-10' />
                  {/* <span class='material-symbols-outlined'>mail</span>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" className=''/> */}


                  <input
                    type='email'
                    name='email'
                    placeholder='ejemplo@email.com'
                    className='bg-lorange/80 text-white w-56 p-2 rounded-lg'
                  />
                </div>
              </div>
              <div className='grid gap-0.5'>
                <label name='password' className='px-2 '>
                  CONTRASEÑA{' '}
                </label>
                <input
                  type='empasswordail'
                  name='password'
                  placeholder='Min 8 letras y números.'
                  className='bg-lorange/50 text-white p-2 rounded-lg'
                />
              </div>
            </div>
            <div className='grid justify-center gap-3'>
              <button
                type='submit'
                className='bg-[#0288D1] p-1.5 w-56 m-auto font-lucky text-white text-xl tracking-wider rounded-full'
              >
                iniciar sesión{' '}
              </button>
              <Link
                href='./register'
                className='text-natD underline text-center'
              >
                CREAR CUENTA
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
