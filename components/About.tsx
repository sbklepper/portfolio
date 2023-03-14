import Link from "next/link";
import {DatabaseIcon, LightningBoltIcon, SearchIcon} from "@heroicons/react/outline";

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

export default function About() {
    return (

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
    )
}