import { Fragment } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { StarIcon } from '@heroicons/react/solid'
import {
  SiGitlab,
  SiLinkedin,
  SiGmail,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiHeroku,
} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { Tab } from '@headlessui/react'
import { DocumentDownloadIcon } from '@heroicons/react/outline'

const person = {
  name: 'Sam Klepper',
  position: 'Full-Stack Web Developer',
  description:
    'After initially persuing a degree in Graphic Design, I found my passion for web development. Since graduating from Digital Crafts coding bootcamp in March of 2020, I have helped numerous small businesses get their companies online and consider it a passion of mine. ',
  skills: [
    'Graphic & Logo design',
    'Full-Stack Web Development',
    'SEO optimized websites & applications',
    'Data driven infrastructure & analytics',
  ],
  imageSrc: '/images/sam3-cr.jpg',
}
const testimonials = {
  average: 5,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>When we needed a website fast, Sam delivered what we needed in the time we needed it. From start to finish, all the features we needed to manage our social media presence were met.</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Xavier Chavaria',
      title: 'Owner/Operator',
      company: 'Ultra Demolition',
      avatarSrc: '/images/logos/ud.png',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>I approached Sam with only a rough idea in mind and he helped me bring my idea to fruition. Sam helped with a logo, unique design & functional contact forms to keep up with customer demands.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Martha DeLeon',
      title: 'CEO',
      company: 'DeLeon Safety Solutions',
      avatarSrc: '/images/logos/dss-logo.png',
    },
  ],
}
const skills = [
  {
    name: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 />,
  },
  {
    name: 'JS',
    icon: <SiJavascript />,
  },
  {
    name: 'Node',
    icon: <SiNodedotjs />,
  },
  {
    name: 'React',
    icon: <SiReact />,
  },
  {
    name: 'Next',
    icon: <SiNextdotjs />,
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    name: 'Express',
    icon: <SiExpress />,
  },

  {
    name: 'Mongo',
    icon: <SiMongodb />,
  },
  {
    name: 'Postgres',
    icon: <SiPostgresql />,
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
  },
  {
    name: 'Heroku',
    icon: <SiHeroku />,
  },
]
const certification = {
  href: '/images/resume.pdf',
  summary:
    'Graduated from DigitalCrafts in March of 2020 with a Certification in Full-Stack Web Development.',
  content: `
    <br />
    <p>Hello. I am Sam. A developer from Houston, TX. I have a passion for all-things-tech and enjoy making websites. After initially persuing a degree in Graphic Design, I found my passion for web development. Since graduating from Digital Crafts coding bootcamp in March of 2020, I have helped numerous small businesses get their companies online and consider it a passion of mine.</p>
  

  `,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AboutPage() {
  return (
    <Layout title={'Sam Klepper | About'}>
      <div className='relative bg-indigo-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='/images/laptop.jpg'
            alt='Laptop half opened'
          />
          <div
            className='absolute inset-0 bg-indigo-800 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white text-center sm:text-5xl lg:text-6xl'>
            About
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className='bg-white'>
        <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          {/* Person */}
          <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
            {/* Person image */}
            <div className='lg:row-end-1 lg:col-span-4 shadow-2xl shadow-gray-700 rounded-lg'>
              <div className='aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden'>
                <img
                  src={person.imageSrc}
                  alt={person.name}
                  className='object-center object-cover '
                />
              </div>
            </div>

            {/* Person details */}
            <div className='max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3'>
              <div className='flex flex-col-reverse'>
                <div className='mt-4'>
                  <h1 className='text-2xl font-extrabold tracking-wide text-gray-900 sm:text-3xl'>
                    {person.name}
                  </h1>

                  <h2 id='information-heading' className='sr-only'>
                    Sam Klepper
                  </h2>
                  <p className='text-lg text-gray-500 mt-2'>
                    {person.position}
                  </p>
                </div>

                <div>
                  <h3 className='sr-only'>Testimonials</h3>
                  {/* <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-yellow-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}{' '}
                    /5 stars
                  </div> */}
                  <p className='sr-only'>
                    {testimonials.average} out of 5 stars
                  </p>
                </div>
              </div>

              {/* <p className='text-gray-500 mt-6'>{person.description}</p> */}

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2'>
                <a href='/images/resume.pdf' target='_blank' rel='noreferrer'>
                  <button
                    type='button'
                    className='w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'>
                    Resume{' '}
                    <span>
                      <DocumentDownloadIcon className='h-5 ml-1' />
                    </span>
                  </button>
                </a>
                <Link href='/contact'>
                    <button
                      type='button'
                      className='w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'>
                      Contact
                    </button>
                </Link>
              </div>

              <div className='border-t border-gray-200 mt-10 pt-10'>
                <h3 className='text-md font-medium text-gray-900'>Skills</h3>
                <div className='mt-4 prose prose-sm text-gray-500'>
                  <ul role='list'>
                    {person.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='border-t border-gray-200 mt-10 pt-10'>
                <h3 className='text-md font-medium text-gray-900'>
                  Certifications
                </h3>
                <p className='mt-4 text-sm text-gray-500'>
                  {certification.summary}{' '}
                  <a
                    href={certification.href}
                    target='_blank'
                    rel='noreferrer'
                    className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Read full certification
                  </a>
                </p>
              </div>

              <div className='border-t border-gray-200 mt-10 pt-10'>
                <h3 className='text-md font-medium text-gray-900'>Social</h3>
                <ul role='list' className='flex items-center space-x-6 mt-4'>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/samuel-klepper-0435b5193/'
                      className='flex items-center justify-center w-6 h-6 text-gray-400 hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                      target='_blank'
                      rel='noreferrer'>
                      <span className='sr-only'>LinkedIn</span>
                      <SiLinkedin className='w-5 h-5' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://gitlab.com/bklep'
                      className='flex items-center justify-center w-6 h-6 text-gray-400 hover:text-orange-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                      target='_blank'
                      rel='noreferrer'>
                      <span className='sr-only'>Gitlab</span>
                      <SiGitlab className='w-5 h-5' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='mailto:sam@samklepper.com'
                      className='flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                      target='_blank'
                      rel='noreferrer'>
                      <span className='sr-only'>Gmail</span>
                      <SiGmail className='w-5 h-5' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4'>
              <Tab.Group as='div'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='-mb-px flex space-x-8'>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }>
                      Bio
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }>
                      Skills
                    </Tab>

                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }>
                      Testimonials
                    </Tab>
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  <Tab.Panel className='pt-6'>
                    <h3 className='sr-only'>Bio</h3>

                    <div
                      className='prose prose-lg max-w-none text-gray-500'
                      dangerouslySetInnerHTML={{
                        __html: certification.content,
                      }}
                    />
                  </Tab.Panel>
                  <Tab.Panel as='dl' className='text-sm text-gray-500'>
                    <h3 className='sr-only'>Skills</h3>
                    <div className='grid grid-cols-3 gap-y-3 gap-x-6 place-content-center my-3'>
                      {skills.map((skill) => (
                        <Fragment key={skill.name}>
                          <dd className='mt-5 text-4xl mx-auto font-medium text-center text-gray-900 group transform transition duration-500 hover:scale-110'>
                            <span className='group-hover:text-sky-600 group-hover:cursor-pointer'>
                              {skill.icon}
                            </span>

                            <dt className='mt-2 text-sm text-gray-500 group-hover:text-sky-600 group-hover:cursor-pointer'>
                              <p className=''>{skill.name}</p>
                            </dt>
                          </dd>
                        </Fragment>
                      ))}
                    </div>
                  </Tab.Panel>

                  <Tab.Panel className='-mb-10'>
                    <h3 className='sr-only'>Testimonials</h3>

                    {testimonials.featured.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className='flex text-sm text-gray-500 space-x-4'>
                        <div className='flex-none py-10'>
                          <img
                            src={review.avatarSrc}
                            alt=''
                            className='w-12 h-10 bg-white'
                          />
                        </div>
                        <div
                          className={classNames(
                            reviewIdx === 0 ? '' : 'border-t border-gray-200',
                            'py-10'
                          )}>
                          <h3 className='font-semibold text-gray-900'>
                            {review.author}
                          </h3>
                          <p className='font-medium text-gray-600'>
                            {review.title}
                          </p>
                          <p>{review.company}</p>

                          <div className='flex items-center mt-4'>
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden='true'
                              />
                            ))}
                          </div>
                          <p className='sr-only'>
                            {review.rating} out of 5 stars
                          </p>

                          <div
                            className='mt-4 prose prose-sm max-w-none text-gray-500'
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                        </div>
                      </div>
                    ))}
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
