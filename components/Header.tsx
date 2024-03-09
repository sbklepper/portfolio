import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { DocumentDownloadIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  return (
    <Popover as='nav' className='bg-white shadow-2xl'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                      <img
                        src='/images/sbk-logo.svg'
                        alt="Sam Klepper's logo"
                        className='h-12 lg:hidden'
                      />
                      {/* <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-purple-600 font-extrabold tracking-wide lg:hidden'>
                        SbK
                      </p> */}
                  </Link>
                  <Link href='/'>
                      <img
                        src='/images/sbk-logo.svg'
                        alt="Sam Klepper's logo"
                        className='h-12 hidden lg:block'
                      />
                      {/* <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-purple-600 font-extrabold tracking-wide hidden lg:block'>
                        SbK
                      </p> */}
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href='/' className={
                    router.pathname === '/'
                        ? 'border-indigo-500 text-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                  } onClick={newPathName}>
                      Home
                  </Link>
                  <Link href='/about' className={
                    router.pathname === '/about'
                        ? 'border-indigo-500 text-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                  } onClick={newPathName}>
                      About
                  </Link>
                  <Link href='/projects' className={
                    router.pathname.startsWith('/projects')
                        ? 'border-indigo-500 text-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                  }
                        onClick={newPathName}>
                      Projects
                  </Link>
                  <Link href='/contact' className={
                    router.pathname === '/contact'
                        ? 'border-indigo-500 text-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'
                  }
                        onClick={newPathName}>
                      Contact
                  </Link>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div className='inline-flex items-center'>
                    <div className='bg-white rounded-full flex'>
                      <Link href='/about'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='/images/samK-head.jpeg'
                            alt='Sam Klepper headshot'
                          />
                      </Link>
                    </div>
                    <a
                      href='/images/documents/samuel-klepper-resume.pdf'
                      target='_blank'
                      rel='noreferrer'>
                      <button
                        type='button'
                        className='inline-flex items-center ml-2 px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Resume{' '}
                        <span>
                          <DocumentDownloadIcon className='h-5 ml-1' />
                        </span>
                      </button>
                    </a>
                  </div>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Popover.Panel className='sm:hidden w-full absolute z-10 bg-white rounded-xl border-b-2'>
              <div className='pt-0 pb-3 space-y-1'>
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Link href='/'>
                    <Popover.Button
                      as='button'
                      className={
                        router.pathname === '/'
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700 text-left block pl-3 pr-4 py-2 border-l-4 min-w-full'
                          : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base text-left font-medium min-w-full'
                      }>
                      Home
                    </Popover.Button>
                </Link>

                <Link href='/about'>
                    <Popover.Button
                      as='button'
                      className={
                        router.pathname === '/about'
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700 text-left block pl-3 pr-4 py-2 border-l-4 min-w-full'
                          : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base text-left font-medium min-w-full'
                      }>
                      About
                    </Popover.Button>
                </Link>
                <Link href='/projects' passHref={true}>
                    <Popover.Button
                      as='button'
                      className={
                        router.pathname === '/projects' ||
                        router.asPath === `/projects/ultra-demo` ||
                        router.asPath === `/projects/wig` ||
                        router.asPath === `/projects/wgfps` ||
                        router.asPath === `/projects/dds` ||
                        router.asPath === `/projects/edge196`
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700 text-left block pl-3 pr-4 py-2 border-l-4 min-w-full'
                          : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base text-left font-medium min-w-full'
                      }>
                      Projects
                    </Popover.Button>
                </Link>
                <Link href='/contact'>
                    <Popover.Button
                      as='button'
                      className={
                        router.pathname === '/contact'
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700 text-left block pl-3 pr-4 py-2 border-l-4 min-w-full'
                          : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base text-left font-medium min-w-full'
                      }>
                      Contact
                    </Popover.Button>
                </Link>

                <div className='pt-4 pb-3 border-t border-gray-200'>
                  <div className='flex items-center px-4'>
                    <div className='flex-shrink-0'>
                      <Link href='/about'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='/images/samK-head.jpeg'
                            alt=''
                          />
                      </Link>
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium text-gray-800'>
                        Sam Klepper
                      </div>
                      <div className='text-sm font-medium text-gray-500'>
                        <a
                          href='mailto:sam@samklepper.com'
                          target='_blank'
                          rel='noreferrer'>
                          sam@samklepper.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 space-y-1'>
                    <a
                      href='/images/documents/samuel-klepper-resume.pdf'
                      target='_blank'
                      rel='noreferrer'>
                      <Popover.Button
                        as='button'
                        className={
                          router.pathname === '/images/documents/samuel-klepper-resume.pdf'
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 text-left block pl-3 pr-4 py-2 border-l-4 min-w-full'
                            : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base text-left font-medium min-w-full'
                        }>
                        Resume
                      </Popover.Button>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
