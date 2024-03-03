import {ExternalLinkIcon} from "@heroicons/react/outline";
import ProjectsModal from "@/components/ProjectsModal";
import {useCallback, useState} from "react";
import {IProject} from "@/interface/project";
import Link from 'next/link'

type Props = {
    projects: IProject[]
    projectsForModal: IProject[]
}

export default function Projects({ projects, projectsForModal }: Props) {
    const [selectedProject, setSelectedProject] = useState(projectsForModal[0]);

    let [isOpen, setIsOpen] = useState(false)

    const toggleModal = useCallback((slug: string) => {
        setIsOpen(!isOpen)
        setSelectedProject(projectsForModal.find((project) => project.slug === slug))
        console.log(slug)
    }, [isOpen])

    return (
        <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <Link href={'/projects'}>     
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Projects
                        </h2>
                    </Link>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Here are a few of the latest projects I have worked on.
                    </p>
                </div>
                <div className="mt-12 max-w-md md:max-w-lg mx-auto grid gap-7 lg:grid-cols-3 lg:max-w-none">
                    {projects.map((project, index) => (
                        <div
                            key={project.frontmatter.title}
                            className="flex flex-col rounded-lg shadow-xl shadow-gray-600 overflow-hidden hover:shadow-2xl group transform transition duration-500 hover:scale-110"
                            onClick={() => toggleModal(project.slug)}
                        >
                            <div className="flex-shrink-0">
                                {/*<Link href={`/projects/${project.slug}`}>*/}
                                <img
                                    className="h-48 w-full object-cover"
                                    src={project.frontmatter.imageUrl}
                                    alt={project.frontmatter.title}
                                />
                                {/*</Link>*/}
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {project.frontmatter.category}
                                    </p>
                                    {/*<Link href={`/projects/${project.slug}`} className="block mt-2">*/}
                                    <p className="text-xl font-semibold text-gray-900">
                                        {project.frontmatter.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {project.frontmatter.excerpt}
                                    </p>
                                    {/*</Link>*/}
                                </div>
                                <div className="mt-6 flex justify-center items-center">
                                    {/*<Link href={`/projects/${project.slug}`}>*/}
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => {
                                            setIsOpen(true)
                                        }}
                                    >
                                        Learn more
                                        <ExternalLinkIcon
                                            className="ml-3 -mr-1 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    {/*</Link>*/}
                                </div>
                            </div>
                            <ProjectsModal isOpen={isOpen} setIsOpen={setIsOpen} selectedProject={selectedProject}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}