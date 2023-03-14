import { Dialog } from '@headlessui/react'
import {IProject} from "@/interface/project";
import Link from "next/link";
import {ExternalLinkIcon} from "@heroicons/react/outline";

export default function ProjectsModal({ isOpen, setIsOpen, selectedProject }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, selectedProject: IProject }) {

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                    {/*<Dialog.Title>Complete your order</Dialog.Title>*/}

                    <div
                        key={selectedProject.frontmatter.title}
                        className="flex flex-col rounded-lg shadow-xl shadow-gray-600 overflow-hidden hover:shadow-2xl group transform transition duration-500 hover:scale-110"
                    >
                        <div className="flex-shrink-0">
                            {/*<Link href={`/projects/${selectedProject.slug}`}>*/}
                                <img
                                    className="h-48 w-full object-cover"
                                    src={selectedProject.frontmatter.imageUrl}
                                    alt={selectedProject.frontmatter.title}
                                />
                            {/*</Link>*/}
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    {selectedProject.frontmatter.category}
                                </p>
                                {/*<Link href={`/projects/${selectedProject.slug}`} className="block mt-2">*/}
                                    <p className="text-xl font-semibold text-gray-900">
                                        {selectedProject.frontmatter.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {selectedProject.frontmatter.excerpt}
                                    </p>
                                {/*</Link>*/}
                            </div>
                            <div className="mt-6 flex justify-center items-center">
                                {/*<Link href={`/projects/${selectedProject.slug}`}>*/}
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
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}