import Layout from "@/components/Layout";
import {getProjects} from "@/lib/projects";
import Link from "next/link";
import {IProject} from "@/interface/project";

export default function ProjectsPage(projects: { projects: IProject[]}) {
    return (
        <Layout title={"Sam Klepper | Projects"}>
            <div className="relative bg-indigo-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="/images/web-dev.jpeg"
                        alt="Web development"
                    />
                    <div
                        className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
                        aria-hidden="true"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white text-center sm:text-5xl lg:text-6xl">
                        Projects
                    </h1>
                </div>
            </div>

            {/* Projects section */}
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 dark:bg-slate-800">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-indigo-600">
                            My Work
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-300">
                            Here are some of the latest projects I have worked on.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                        {projects.projects.map((project) => (
                            <li
                                key={project.frontmatter.title}
                                className="transition ease-in-out delay-150 hover:-translate-y-4 duration-300 hover:bg-blue-50 dark:hover:bg-slate-500 hover:border-b-2 dark:border-indigo-600 dark:hover:border-indigo-600 dark:bg-slate-600 hover:shadow-xl rounded-lg"
                            >
                                <Link href={`/projects/${project.slug}`} passHref={true}>
                                    <div className="space-y-4 rounded-lg">
                                        <div className="aspect-w-3 aspect-h-2 rounded-lg border shadow-lg dark:border-none">
                                            <img
                                                className="object-cover shadow-lg rounded-lg"
                                                src={project.frontmatter.imageUrl}
                                                alt=""
                                            />
                                        </div>

                                        <div className="space-y-2 px-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <p className="text-indigo-600 dark:text-indigo-400">
                                                    {project.frontmatter.category}
                                                </p>
                                                <h3>{project.frontmatter.title}</h3>
                                                <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                                                    {project.frontmatter.excerpt}
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center py-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-indigo-400 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-indigo-600 bg-white dark:bg-indigo-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Learn more
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            projects: getProjects(),
        },
    };
}
