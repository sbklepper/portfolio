import {useCallback, useRef, useState} from "react";
import Link from "next/link";
import {getProjects} from "@/lib/projects";
import CompanySlider from "@/components/CompanySlider";
import ProjectsModal from "@/components/ProjectsModal";
import Layout from "@/components/Layout";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import {
    BriefcaseIcon,
    ExternalLinkIcon,
    MailIcon,
    LightningBoltIcon,
    DatabaseIcon,
    SearchIcon,
} from "@heroicons/react/outline";

const supportLinks = [
    {
        name: "Modern",
        href: "/about",
        description:
            "Responsive layouts that look good on all devices. Fast loading websites with modern tech & analytics.",
        icon: LightningBoltIcon,
    },
    {
        name: "Full-Stack",
        href: "/about",
        description:
            "From simple brochure websites to heavy, data driven applications. Secure and ready for each unique situation.",
        icon: DatabaseIcon,
    },
    {
        name: "SEO Optimized",
        href: "/about",
        description:
            "Dynamic meta-data that guarantees your website to be at the top of the Google search results-- getting your business seen.",
        icon: SearchIcon,
    },
];

function resetFields() {
    (document.getElementById("first-name") as HTMLInputElement).value = "";
    (document.getElementById("last-name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("company") as HTMLInputElement).value = "";
    (document.getElementById("phone-number") as HTMLInputElement).value = "";
    (document.getElementById("message") as HTMLInputElement).value = "";
}

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function HomePage({projects}) {

    let [isOpen, setIsOpen] = useState(false)

    const form = useRef();

    const toggleModal = useCallback((slug: string) => {
        setIsOpen(!isOpen)
        console.log(slug)
    }, [isOpen])

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
            form.current,
            `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
        )
        .then(
            (result) => {
                toast("🎉 Message sent!");
                resetFields();
                console.log(result.text);
            },
            (error) => {
                toast.error(error.text);
                console.log(error.text);
            }
        );
};

return (
    <Layout>
        <div className="">
            {/* Hero card */}
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white"/>
                <div className="max-w-full   ">
                    <div className="relative shadow-xl  sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="/images/circuit-board.jpeg"
                                alt="Circuit board up close"
                            />
                            <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply z-0"/>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Get your</span>
                                <span className="block text-indigo-200">business online</span>
                            </h1>
                            <p className="mt-6 max-w-xl mx-auto text-center text-xl text-indigo-200 ">
                                In today&apos;s fast-paced world, getting your business online
                                can be more of a challenge than need be. Let me help you with
                                that.
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div
                                    className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <Link href="/index.tsx"
                                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                        <span>
                          <BriefcaseIcon
                              height={20}
                              className="text-indigo-700 mr-2"
                          />
                        </span>{" "}
                                        Projects
                                    </Link>
                                    <Link href="/contact"
                                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                        <span>
                          <MailIcon height={20} className="text-white mr-2"/>
                        </span>{" "}
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company cloud */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                        Some local businesses I&apos;ve worked with
                    </p>
                    <div className="mt-6 pt-10 grid grid-cols-1 gap-8 ">
                        <CompanySlider/>
                    </div>
                </div>
            </div>
        </div>

        {/* About Section */}
        <div className="bg-white">
            {/* Header */}
            <div className="relative pb-32 bg-gray-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="/images/laptop.jpg"
                        alt="Laptop half opened"
                    />
                    <div
                        className="absolute inset-0 bg-gray-500 mix-blend-multiply"
                        aria-hidden="true"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        About
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Knowing what it takes to get your business online is half the
                        battle. From responsive layout to SEO optimization, social media
                        to Google Analytics-- I&apos;ve got you covered.
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div
                            key={link.name}
                            className="flex flex-col bg-white rounded-2xl shadow-xl"
                        >
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <link.icon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">
                                    {link.name}
                                </h3>
                                <p className="mt-4 text-base text-gray-500">
                                    {link.description}
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <Link href={link.href}
                                      className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                                    Learn more<span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Projects */}
        <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Here are a few of the latest projects I have worked on.
                    </p>
                </div>
                <div className="mt-12 max-w-md md:max-w-lg mx-auto grid gap-7 lg:grid-cols-3 lg:max-w-none">
                    {projects.map((project) => (
                        <div
                            key={project.frontmatter.title}
                            className="flex flex-col rounded-lg shadow-xl shadow-gray-600 overflow-hidden hover:shadow-2xl group transform transition duration-500 hover:scale-110"
                            onClick={() => toggleModal(project.slug)}
                        >
                            <div className="flex-shrink-0">
                                <Link href={`/projects/${project.slug}`}>
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={project.frontmatter.imageUrl}
                                        alt={project.frontmatter.title}
                                    />
                                </Link>
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {project.frontmatter.category}
                                    </p>
                                    <Link href={`/projects/${project.slug}`} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            {project.frontmatter.title}
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            {project.frontmatter.excerpt}
                                        </p>
                                    </Link>
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
                            <ProjectsModal isOpen={isOpen} setIsOpen={setIsOpen} project={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={404}
                        fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={404}
                        fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Need something fast? Have a unique project in mind? Just want to
                        say hi?
                    </p>
                </div>
                <div className="mt-12">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    required
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    required
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="company"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Company
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <label
                                    htmlFor="phone-optional"
                                    className="block text-sm font-medium text-gray-500"
                                >
                                    Optional
                                </label>
                            </div>

                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    className="py-3 px-4 block w-full  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="555-555-5555"
                                    aria-describedby="phone-optional"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <div className="mt-1">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      defaultValue={""}
                  />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                                <span>
                    <MailIcon
                        className="ml-3 -mr-1 h-5 w-5"
                        aria-hidden="true"
                    />
                  </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
);
}

export async function getStaticProps() {
    return {
        props: {
            projects: getProjects().slice(0, 3),
        },
    };
}
