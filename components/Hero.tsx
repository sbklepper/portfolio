import Link from "next/link";
import {BriefcaseIcon, MailIcon} from "@heroicons/react/outline";
import CompanySlider from "@/components/CompanySlider";

export default function Hero() {
    return (
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
                                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <Link href="/projects" passHref={true} className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                                        <span>
                                          <BriefcaseIcon height={20} className="text-indigo-700 mr-2"/>
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
    )
}