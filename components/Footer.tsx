import { useState } from 'react'
import Link from 'next/link'
import { SiGitlab, SiLinkedin, SiGmail } from 'react-icons/si'
import { DocumentDownloadIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/samuel-klepper-0435b5193/',
      icon: SiLinkedin,
    },
    {
      name: 'GitLab',
      href: 'https://gitlab.com/bklep',
      icon: SiGitlab,
    },
    {
      name: 'Gmail',
      href: 'mailto:sam@samklepper.com',
      icon: SiGmail,
    },
    {
      name: 'Resume',
      href: '/images/resume.pdf',
      icon: DocumentDownloadIcon,
    },
  ],
}

export default function Footer() {
  const router = useRouter()

  return (
    <footer className='bg-white'>
      <div className='flex justify-center'>
        <Link href='/'>
            <img
              src='/images/sbk-logo.svg'
              alt="Sam Klepper's Logo"
              className='h-14'
            />
        </Link>
      </div>
      <div className='max-w-7xl mx-auto pt-6 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <Link href={item.href} className={
                router.pathname === item.href
                    ? 'text-md font-medium text-indigo-500'
                    : 'text-md font-medium text-gray-500 hover:text-gray-900'
              }>
                  {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              target='_blank'
              rel='noreferrer'>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; {new Date().getFullYear()} SbK All rights reserved.
        </p>
      </div>
    </footer>
  )
}
