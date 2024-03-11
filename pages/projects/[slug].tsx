import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import marked from 'marked'
import Layout from '@/components/Layout'
import {Fragment} from 'react'
import {Tab} from '@headlessui/react'
import {FaArrowLeft} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {SiGitlab} from 'react-icons/si'
import Lightbox from "@/components/Lightbox";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
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
            case 'amber':
                return 'border-amber-500 text-amber-600'
            case 'pink':
                return 'border-pink-500 text-pink-600'
            case 'lime':
                return 'border-lime-500 text-lime-600'
            default:
                return 'border-indigo-500 text-indigo-600'
        }
    }

    /**
     * Tab Panels array
     */
    const tabPanels: ({ key: string; title: string; description: string; repo?: string, image: string; imageAlt: string })[] = [
        {
            key: 'Tech',
            title: 'Tech',
            description: techDescription,
            image: techTabImg,
            imageAlt: techTabImgAlt,
        },
        {
            key: 'Design',
            title: 'Design',
            description: designDescription,
            image: designTabImg,
            imageAlt: designTabImgAlt,
        },
        {
            key: 'Links',
            title: 'Links',
            description: link,
            repo: repo,
            image: image2Url,
            imageAlt: title,
        },
    ]

    return (
        <Layout title={`Sam Klepper | ${title}`}>
            <div className='bg-white dark:bg-slate-800 mt-20'>
                <div className='relative overflow-hidden'>
                    <div className='relative pt-6 pb-16 sm:pb-24'>

                        {/* Title Content */}
                        <div className='mt-8 md:mt-16 mx-auto max-w-7xl px-4 sm:px-6'>
                            <div className='text-center'>
                                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl'>
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
                            <div className='flex-1'/>
                            <div className={`flex-1 w-full ${baseColor}`}/>
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
                                <img className='h-12' src={tech1} alt={tech1Name}/>
                                <p className='text-white font-semibold text-xl ml-2'>
                                    {tech1Name}
                                </p>
                            </div>
                            <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                                <img className='h-12' src={tech2} alt={tech2Name}/>
                                <p className='text-white font-semibold text-xl ml-2'>
                                    {tech2Name}
                                </p>
                            </div>
                            <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                                <img className='h-12' src={tech3} alt={tech3Name}/>
                                <p className='text-white font-semibold text-xl ml-2'>
                                    {tech3Name}
                                </p>
                            </div>
                            <div className='col-span-1 flex justify-center items-center md:col-span-3 lg:col-span-1'>
                                <img className='h-12' src={tech4} alt={tech4Name}/>
                                <p className='text-white font-semibold text-xl ml-2'>
                                    {tech4Name}
                                </p>
                            </div>
                            <div className='col-span-2 flex justify-center items-center md:col-span-3 lg:col-span-1'>
                                <img className='h-12' src={tech5} alt={tech5Name}/>
                                <p className='text-white font-semibold text-xl ml-2'>
                                    {tech5Name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className='bg-white dark:bg-slate-800'>
                    <section
                        aria-labelledby='features-heading'
                        className='max-w-7xl mx-auto py-16 sm:px-2 lg:px-8'>
                        <div className='max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none'>
                            <div className='max-w-3xl'>
                                <h2
                                    id='features-heading'
                                    className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl'>
                                    Specifications
                                </h2>
                                <p className='mt-4 text-gray-500 dark:text-gray-400'>
                                    <div
                                        className='text-md md:text-lg'
                                        dangerouslySetInnerHTML={{
                                            __html: marked(content),
                                        }}>
                                    </div>
                                </p>
                            </div>

                            <Tab.Group as='div' className='mt-4'>
                                <div className='-mx-4 flex overflow-x-auto sm:mx-0'>
                                  <div className='flex-auto px-4 border-b border-gray-200 dark:border-slate-600 sm:px-0'>
                                      <Tab.List className='-mb-px flex space-x-10'>
                                        {tabPanels.map((panel) => (
                                            <Tab
                                                key={panel.key}
                                                className={({selected}) =>
                                                    classNames(
                                                        selected
                                                            ? handleTailwindColor(tailwindColor)
                                                            : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 dark:hover:border-slate-600',
                                                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                    )
                                                }>
                                                {panel.title}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                  </div>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {tabPanels.map((panel) => (
                                        <Tab.Panel key={panel.key} className='space-y-16 pt-10 lg:pt-16'>
                                            {panel.key === 'Links' ? (
                                                <div
                                                    key='Links'
                                                    className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
                                                    <div className='mt-6 lg:mt-0 lg:col-span-5'>
                                                        <h3 className='text-lg font-medium text-gray-900 dark:text-gray-300'>
                                                            Links
                                                        </h3>
                                                        <div className='flex py-2'>
                                                            <a
                                                                href={panel.description}
                                                                className='text-gray-400 dark:text-gray-300 hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                                                                target='_blank'
                                                                rel='noreferrer'>
                                                                <span className='sr-only'>Website</span>
                                                                <CgWebsite className='w-8 h-8' />
                                                            </a>
                                                            {repo && (
                                                                <a
                                                                    href={panel.repo}
                                                                    className='text-gray-400 dark:text-gray-300 hover:text-orange-500 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                                                                    target='_blank'
                                                                    rel='noreferrer'>
                                                                    <span className='sr-only'>GitLab</span>
                                                                    <SiGitlab className='w-8 h-8 ml-3'/>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className='lg:col-span-7'>
                                                        <div
                                                            className='aspect-w-2 aspect-h-1 rounded-lg shadow-2xl bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2'>
                                                           <Lightbox src={panel.image} alt={panel.imageAlt} width={1200} height={700} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    key={panel.key}
                                                    className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
                                                <div className='mt-6 lg:mt-0 lg:col-span-5'>
                                                        <h3 className='text-lg font-medium text-gray-900 dark:text-gray-300'>
                                                            {panel.key}
                                                        </h3>
                                                        <p className='mt-2 text-md text-gray-500 dark:text-gray-400'
                                                           dangerouslySetInnerHTML={{__html: panel.description}}>
                                                        </p>
                                                    </div>
                                                    <div className='lg:col-span-7'>
                                                        <div
                                                            className='aspect-w-2 aspect-h-1 rounded-lg shadow-2xl bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2'>
                                                            <Lightbox src={panel.image} alt={panel.imageAlt} width={1200} height={700} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Tab.Panel>
                                    ))}

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
                            <FaArrowLeft className='mr-2'/> Go Back
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

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(
        path.join('projects', slug + '.md'),
        'utf-8'
    )

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            content,
            slug,
        },
    }
}
