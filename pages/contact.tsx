import Layout from '@/components/Layout'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { MailIcon } from '@heroicons/react/outline'
import { SiGitlab, SiGmail, SiLinkedin } from 'react-icons/si'

/**
 * Reset the form fields
 * @returns void
 */
function resetFields() {
  (document.getElementById("first-name") as HTMLInputElement).value = "";
  (document.getElementById("last-name") as HTMLInputElement).value = "";
  (document.getElementById("email") as HTMLInputElement).value = "";
  (document.getElementById("company") as HTMLInputElement).value = "";
  (document.getElementById("phone-number") as HTMLInputElement).value = "";
  (document.getElementById("message") as HTMLInputElement).value = "";
}

export default function ContactPage() {
  const form = useRef()

  /**
   * Sends the email
   * @param e
   */
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          toast('🎉 Message sent!')
          resetFields()
          console.log(result.text)
        },
        (error) => {
          toast.error(error.text)
          console.log(error.text)
        }
      )
  }

  return (
    <Layout title={'Sam Klepper | Contact'}>
      <div className='pb-24 overflow-hidden mt-20'>
        <div className=''>
          {/* Header */}
          <div className='bg-white dark:bg-slate-800'>
            <div className='py-24 lg:py-32'>
              <div className='relative max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 text-center sm:text-5xl lg:text-6xl'>
                  Contact
                </h1>
              
              </div>
            </div>
          </div>

          {/* Contact section */}
          <section
            className='relative bg-white dark:bg-slate-800'
            aria-labelledby='contact-heading'>
            <div
              className='absolute w-full h-1/2 bg-white dark:bg-slate-800'
              aria-hidden='true'
            />
            {/* Decorative dot pattern */}
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <svg
                className='absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'>
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200 dark:text-gray-500'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='relative bg-white dark:bg-slate-600 shadow-xl'>
                <h2 id='contact-heading' className='sr-only'>
                  Contact us
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  {/* Contact information */}
                  <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12'>
                    {/* Decorative angle backgrounds */}
                    <div
                      className='absolute inset-0 pointer-events-none sm:hidden'
                      aria-hidden='true'>
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={343}
                        height={388}
                        viewBox='0 0 343 388'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                          fill='url(#linear1)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear1'
                            x1='254.553'
                            y1='107.554'
                            x2='961.66'
                            y2='814.66'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                      aria-hidden='true'>
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={359}
                        height={339}
                        viewBox='0 0 359 339'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                          fill='url(#linear2)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear2'
                            x1='192.553'
                            y1='28.553'
                            x2='899.66'
                            y2='735.66'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                      aria-hidden='true'>
                      <svg
                        className='absolute inset-0 w-full h-full'
                        width={160}
                        height={678}
                        viewBox='0 0 160 678'
                        fill='none'
                        preserveAspectRatio='xMidYMid slice'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                          fill='url(#linear3)'
                          fillOpacity='.1'
                        />
                        <defs>
                          <linearGradient
                            id='linear3'
                            x1='192.553'
                            y1='325.553'
                            x2='899.66'
                            y2='1032.66'
                            gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#fff' />
                            <stop offset={1} stopColor='#fff' stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className='text-lg font-medium text-white'>
                      Contact information
                    </h3>
                    {/* <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                      volutpat massa dictumst amet. Sapien tortor lacus arcu.
                    </p> */}
                    <dl className='mt-8 space-y-6'>
                      {/* <dt>
                        <span className='sr-only'>Phone number</span>
                      </dt>
                      <dd className='flex text-base text-indigo-50'>
                        <PhoneIcon
                          className='flex-shrink-0 w-6 h-6 text-indigo-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>+1 (555) 123-4567</span>
                      </dd> */}
                      <dt>
                        <span className='sr-only'>Email</span>
                      </dt>
                      <dd className='flex text-base text-indigo-50'>
                        <MailIcon
                          className='flex-shrink-0 w-6 h-6 text-indigo-200'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>sam@samklepper.com</span>
                      </dd>
                    </dl>
                    <ul role='list' className='mt-8 flex space-x-12'>
                      <li>
                        <a
                          className='text-indigo-200 hover:text-indigo-100'
                          href='https://www.linkedin.com/in/samuel-klepper-0435b5193/'
                          target='_blank'
                          rel='noreferrer'>
                          <span className='sr-only'>LinkedIn</span>
                          <SiLinkedin className='h-6 w-6' aria-hidden='true' />
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-indigo-200 hover:text-indigo-100'
                          href='https://gitlab.com/bklep'
                          target='_blank'
                          rel='noreferrer'>
                          <span className='sr-only'>GitLab</span>
                          <SiGitlab className='h-6 w-6' aria-hidden='true' />
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-indigo-200 hover:text-indigo-100'
                          href='mailto:sam@samklepper.com'
                          target='_blank'
                          rel='noreferrer'>
                          <span className='sr-only'>Twitter</span>
                          <SiGmail className='h-6 w-6' aria-hidden='true' />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Contact form */}
                  <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 shadow-2xl'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-gray-300'>
                      Send us a message
                    </h3>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 '>
                      <div>
                        <label
                          htmlFor='first-name'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                          First name
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='first-name'
                            id='first-name'
                            autoComplete='given-name'
                            required
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300'
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor='last-name'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                          Last name
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='last-name'
                            id='last-name'
                            autoComplete='family-name'
                            required
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300'
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor='company'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                          Company
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='company'
                            id='company'
                            autoComplete='organization'
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='flex justify-between'>
                          <label
                            htmlFor='phone-number'
                            className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                            Phone
                          </label>
                          <span
                            id='phone-optional'
                            className='text-sm text-gray-500 dark:text-gray-400'>
                            Optional
                          </span>
                        </div>
                        <div className='mt-1'>
                          <input
                            type='tel'
                            name='phone-number'
                            id='phone-number'
                            autoComplete='tel'
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                            placeholder='555-555-5555'
                            aria-describedby='phone-optional'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                          Email
                        </label>
                        <div className='mt-1'>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            required
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                          />
                        </div>
                      </div>
                      <div className='sm:col-span-2'>
                        <div className='flex justify-between'>
                          <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-900 dark:text-gray-400'>
                            Message
                          </label>
                          <span
                            id='message-max'
                            className='text-sm text-gray-500 dark:text-gray-400'>
                            Max. 500 characters
                          </span>
                        </div>
                        <div className='mt-1'>
                          <textarea
                            id='message'
                            name='message'
                            rows={4}
                            className='py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md dark:bg-slate-300'
                            aria-describedby='message-max'
                            defaultValue={''}
                          />
                        </div>
                      </div>

                      {/* Recaptcha */}
                      <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>

                      <div className='sm:col-span-2 sm:flex sm:justify-end'>
                        <button
                          type='submit'
                          className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
