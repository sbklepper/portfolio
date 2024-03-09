import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import marked from 'marked'
import Layout from '@/components/Layout'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { SiGitlab } from 'react-icons/si'
import { SRLWrapper } from 'simple-react-lightbox'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px',
  },
  thumbnails: {
    showThumbnails: false,
  },
}

export default function ProjectPage({
  frontmatter: {
    title,
    category,
    date,
    excerpt,
    imageUrl,
    image2Url,
    techTabImg,
    techTabImgAlt,
    techDescription,
    designTabImg,
    designTabImgAlt,
    designDescription,
    repo,
    link,
    tech1,
    tech1Name,
    tech2,
    tech2Name,
    tech3,
    tech3Name,
    tech4,
    tech4Name,
    tech5,
    tech5Name,
    baseColor,
    baseTextColor,
    tailwindColor,
  },
  content,
}) {

  /**
   * Function to handle tailwind color
   * @param color
   * @returns string
   */
  const handleTailwindColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'border-green-500 text-green-600'
      case 'red':
        return 'border-red-500 text-red-600'
      case 'teal':
        return 'border-teal-500 text-teal-600'
      case 'orange':
        return 'border-orange-500 text-orange-600'
      case 'blue':
        return 'border-blue-500 text-blue-600'
      case 'grey':
        return 'border-gray-500 text-gray-600'
      default:
        return 'border-indigo-500 text-indigo-600'
    }
  }

  return (
    <Layout title={`Sam Klepper | ${title}`}>
      <div className='bg-white mt-20'>
        <div className='relative overflow-hidden'>
          <div className='relative pt-6 pb-16 sm:pb-24'>

            {/* Title Content */}
            <div className='mt-8 md:mt-16 mx-auto max-w-7xl px-4 sm:px-6'>
              <div className='text-center'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block'>{title}</span>
                </h1>
                <p className={`mt-3 max-w-md mx-auto text-base font-semibold ${baseTextColor} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
                  {category}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
              <div className='flex-1' />
              <div className={`flex-1 w-full ${baseColor}`} />
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <img
                className='relative rounded-lg shadow-xl shadow-black'
                src={imageUrl}
                alt={title}
              />
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className={`${baseColor}`}>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <h2 className='text-center text-white text-sm font-semibold uppercase tracking-wide'>
              Technologies used in this project
            </h2>
            <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                <img className='h-12' src={tech1} alt={tech1Name} />
                <p className='text-white font-semibold text-xl ml-2'>
                  {tech1Name}
                </p>
              </div>
              <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                <img className='h-12' src={tech2} alt={tech2Name} />
                <p className='text-white font-semibold text-xl ml-2'>
                  {tech2Name}
                </p>
              </div>
              <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                <img className='h-12' src={tech3} alt={tech3Name} />
                <p className='text-white font-semibold text-xl ml-2'>
                  {tech3Name}
                </p>
              </div>
              <div className='col-span-1 flex justify-center items-center md:col-span-3 lg:col-span-1'>
                <img className='h-12' src={tech4} alt={tech4Name} />
                <p className='text-white font-semibold text-xl ml-2'>
                  {tech4Name}
                </p>
              </div>
              <div className='col-span-2 flex justify-center items-center md:col-span-3 lg:col-span-1'>
                <img className='h-12' src={tech5} alt={tech5Name} />
                <p className='text-white font-semibold text-xl ml-2'>
                  {tech5Name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className='bg-white'>
          <section
            aria-labelledby='features-heading'
            className='max-w-7xl mx-auto py-16 sm:px-2 lg:px-8'>
            <div className='max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none'>
              <div className='max-w-3xl'>
                <h2
                  id='features-heading'
                  className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Specifications
                </h2>
                <p className='mt-4 text-gray-500'>
                  <div
                    className='text-md md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: marked(content),
                    }}></div>
                </p>
              </div>

              <Tab.Group as='div' className='mt-4'>
                <div className='-mx-4 flex overflow-x-auto sm:mx-0'>
                  <div className='flex-auto px-4 border-b border-gray-200 sm:px-0'>
                    <Tab.List className='-mb-px flex space-x-10'>
                      <Tab
                        key='Tech'
                        className={({ selected }) =>
                          classNames(
                              selected
                                  ? handleTailwindColor(tailwindColor)
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                              'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }>
                        Tech
                      </Tab>
                      <Tab
                        key='Design'
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? handleTailwindColor(tailwindColor)
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }>
                        Design
                      </Tab>
                      <Tab
                        key='Links'
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? handleTailwindColor(tailwindColor)
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }>
                        Links
                      </Tab>
                    </Tab.List>
                  </div>
                </div>

                <Tab.Panels as={Fragment}>
                  <Tab.Panel key='Tech' className='space-y-16 pt-10 lg:pt-16'>
                    <div
                      key='Tech Info'
                      className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
                      <div className='mt-6 lg:mt-0 lg:col-span-5'>
                        <h3 className='text-lg font-medium text-gray-900'>
                          Tech
                        </h3>
                        <p className='mt-2 text-md text-gray-500' dangerouslySetInnerHTML={{__html: techDescription}}>
                        </p>
                      </div>
                      <div className='lg:col-span-7'>
                        <div className='aspect-w-2 aspect-h-1 rounded-lg shadow-2xl bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2'>
                          <SRLWrapper options={options}>
                            <img
                              src={techTabImg}
                              alt={techTabImgAlt}
                              className='object-center object-cover hover:cursor-pointer'
                            />
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel key='Design' className='space-y-16 pt-10 lg:pt-16'>
                    <div
                      key='Design Info'
                      className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
                      <div className='mt-6 lg:mt-0 lg:col-span-5'>
                        <h3 className='text-lg font-medium text-gray-900'>
                          Design
                        </h3>
                        <p className='mt-2 text-md text-gray-500' dangerouslySetInnerHTML={{__html: designDescription}}>
                        </p>
                      </div>
                      <div className='lg:col-span-7'>
                        <div className='aspect-w-2 aspect-h-1 rounded-lg shadow-2xl bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2'>
                          <SRLWrapper options={options}>
                            <img
                              src={designTabImg}
                              alt={designTabImgAlt}
                              className='object-center object-cover hover:cursor-pointer'
                            />
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel key='Links' className='space-y-16 pt-10 lg:pt-16'>
                    <div
                      key='Links'
                      className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
                      <div className='mt-6 lg:mt-0 lg:col-span-5'>
                        <h3 className='text-lg font-medium text-gray-900'>
                          Links
                        </h3>
                        <div className='flex py-2'>
                          <a
                            href={link}
                            className='text-gray-400 hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                            target='_blank'
                            rel='noreferrer'>
                            <span className='sr-only'>Website</span>
                            <CgWebsite className='w-8 h-8' />
                          </a>
                          <a
                            href={repo}
                            className='text-gray-400 hover:text-orange-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                            target='_blank'
                            rel='noreferrer'>
                            <span className='sr-only'>GitLab</span>
                            <SiGitlab className='w-8 h-8 ml-3' />
                          </a>
                        </div>
                      </div>
                      <div className='lg:col-span-7'>
                        <div className='aspect-w-2 aspect-h-1 rounded-lg shadow-2xl bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2'>
                          <SRLWrapper options={options}>
                            <img
                              src={image2Url}
                              alt={title}
                              className='object-center object-cover hover:cursor-pointer'
                            />
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </section>
        </div>
        <div className='mx-auto pb-8 w-48'>
          <Link href='/projects' passHref={true}>
              <button
                type='button'
                className={`inline-flex items-center justify-center w-full px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${baseColor}`}>
                <FaArrowLeft className='mr-2' /> Go Back
              </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
