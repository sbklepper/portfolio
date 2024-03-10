import {ExternalLinkIcon} from "@heroicons/react/outline";
import ProjectsModal from "@/components/ProjectsModal";
import {useCallback, useState} from "react";
import {IProject} from "@/interface/project";
import Link from 'next/link'
import Image from "next/image";

type Props = {
    projects: IProject[]
}

export default function Projects({projects}: Props) {

    /**
     * Truncates the text to a certain length
     * @param text
     * @param length
     * @returns {string}
     */
    const truncateText = (text: string, length: number): string => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }

    return (
        <div className="relative bg-white dark:bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white dark:bg-slate-800 h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <Link href={'/projects'} passHref={true}>
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-indigo-600 sm:text-4xl">
                            Projects
                        </h2>
                    </Link>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        Here are a few of the latest projects I have worked on.
                    </p>
                </div>
                <div className="mt-12 max-w-md md:max-w-lg mx-auto grid gap-7 lg:grid-cols-3 lg:max-w-none">
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={index} passHref={true}>
                            <div
                                key={project.frontmatter.title}
                                className="flex flex-col rounded-lg shadow-xl shadow-gray-600 dark:shadow-none overflow-hidden hover:shadow-2xl group transform transition duration-500 hover:scale-110"
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={project.frontmatter.imageUrl}
                                        alt={project.frontmatter.title}
                                    />
                                </div>
                                <div className="flex-1 bg-white dark:bg-slate-600 p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                            {project.frontmatter.category}
                                        </p>
                                        <p className="text-xl font-semibold text-gray-900">
                                            {project.frontmatter.title}
                                        </p>
                                        <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                                            {truncateText(project.frontmatter.excerpt, 90)}
                                        </p>
                                        {/*</Link>*/}
                                    </div>
                                    <div className="mt-6 flex justify-center items-center">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Learn more
                                            <ExternalLinkIcon
                                                className="ml-3 -mr-1 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}