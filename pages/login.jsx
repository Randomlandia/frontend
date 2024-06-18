import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Login() {
  const defaultBackground = 'bg-booksflying.webp'
  const [background, setBackground] = useState('bg-booksflying.webp')
  return (
    <div
      className='min-h-screen bg-cover bg-left-bottom lg:bg-center bg-no-repeat flex flex-col gap-14 font-mont font-bold'
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      <Navbar />
      <div className='grid justify-items-center bg-[#d9d9d930] h-4/5 w-[350px] md:w-4/5 lg:w-1/2 py-24 px-8 mx-auto rounded-xl'>
        <div className='grid gap-7  text-white '>
          <div className='flex gap-2'>
            <img src='/google.svg' alt='G' className='h-8 w-8' />
            <p className='bg-natD/60 text-sm text-center w-60 md:w-96 py-2 px-4 rounded-xl'>
              CONTINUA CON GOOGLE
            </p>
          </div>
          <div className='flex gap-2'>
            <img
              src='/facebookblue.svg'
              alt='G'
              className='h-8 w-8 rounded-xl'
            />
            <p className=' bg-natD/60 text-sm text-center w-60 md:w-96 py-2 px-4 rounded-xl'>
              CONTINUA CON FACEBOOK
            </p>
          </div>
          <div className='flex gap-2'>
            <img src='/tiktok.svg' alt='G' className='h-8 w-8' />
            <p className='font-mont font-bold bg-natD/60 text-sm text-center w-60 md:w-96 py-2 px-4 rounded-lg'>
              CONTINUA CON TIKTOK
            </p>
          </div>
          <div className='flex'>
            <div className='border-t-2 border-gray-800 w-full max-w-xs'></div>
            <p className='w-auto text-black -translate-y-2.5 text-center px-2'>
              OR
            </p>
            <div className='border-t-2 border-gray-800 w-full max-w-xs'></div>
          </div>
        </div>
        <form
          action='submit'
          className='w-full md:w-[424px] pt-3 grid gap-7 text-sm font-bold'
        >
          <div className='grid gap-2'>
            <div className='grid gap-0.5'>
              <label name='email' className='px-2 '>
                EMAIL{' '}
              </label>
              <input
                type='email'
                name='email'
                placeholder='ejemplo@email.com'
                className='bg-lorange/50 text-white p-2 rounded-lg'
              />
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
            <Link href='./register' className='text-natD underline text-center'>
              CREAR CUENTA
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
