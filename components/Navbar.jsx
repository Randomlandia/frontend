import { useEffect, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(true)
  const [user, setUser] = useState('Explorador')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogged(true)
      const loggedUser = localStorage.getItem('user')
      setUser(loggedUser)
    } else {
      setIsLogged(false)
    }
  }, [])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <nav className='w-full h-14 bg-lorange flex justify-between text-white font-lucky text-xl'>
        <Link href='/randomlandia'>
          <div>logo</div>
        </Link>
        <div className='flex'>
          <div className='hidden lg:flex gap-7 items-center px-3'>
            <Link href='/about'>
              <button>NOSOTROS</button>
            </Link>
            <Link href='/login'>
              <button>INICIAR SESIÓN</button>
            </Link>
            <Link href='/register' className='bg-dorange h-9 px-5 rounded-[10px] flex'>
              <button>CREAR CUENTA</button>
            </Link>
            <Link href='/randomlandia'>
              <button className='bg-natL h-9 px-5 rounded-[10px]'>¡JUGAR!</button>
            </Link>
          </div>
          <div className='flex lg:hidden items-center gap-2'>
            <Link href='/login'>
              <button className='text-sm leading-4 bg-dorange px-6 py-1.5 rounded-[10px]'>
                INICIAR
                <br />
                SESIÓN
              </button>
            </Link>
            <Menu as='div' className='relative inline-block text-left z-10 mr-2'>
              <div>
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 shadow-sm'>
                  <img src='/menu.svg' alt='menu' className='w-14 h-16' />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 w-44 origin-top-right rounded-md bg-agreen/50 shadow-lg ring-1 ring-natD ring-opacity-50 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/user'
                          className={classNames(
                            active ? 'bg-gray-100 text-white' : 'text-white',
                            'flex pl-4 py-1 text-sm font-ram font-normal gap-1 items-center'
                          )}
                        >
                          <div className='bg-lorange p-1 rounded-full border-dorange'>
                            <img src={isLogged ? user?.avatar : '/RANDY_02.svg'} alt='😄' className='h-4 w-4' />
                          </div>
                          <p className=''>{isLogged ? user : 'Explorador'}</p>
                        </Link>
                      )}
                    </Menu.Item>
                    <hr className='w-full border border-zinc-200' />
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/register'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-1 text-sm font-mont font-semibold text-white/85'
                          )}
                        >
                          Crear cuenta
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/about'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-1 text-sm font-mont font-semibold text-white/85'
                          )}
                        >
                          ¿Quiénes somos?
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/randomlandia'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-1 text-sm font-mont font-semibold text-white/85'
                          )}
                        >
                          Randomlandia
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/'
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm font-mont font-semibold text-white/85'
                          )}
                        >
                          ¡JUGAR!
                        </Link>
                      )}
                    </Menu.Item>
                    <hr className='w-full border border-zinc-200' />
                    {isLogged ? (
                      <form method='POST' action='#'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type='submit'
                              onClick={() => {
                                setIsLogged(false)
                                localStorage.removeItem('token')
                                localStorage.removeItem('user')
                              }}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm font-ram text-white/85'
                              )}
                            >
                              Cerrar Sesión
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    ) : (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/login'
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-ram  text-white/85'
                            )}
                          >
                            Iniciar Sesión
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  )
}

