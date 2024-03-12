import {MailIcon} from "@heroicons/react/outline";
import {createRef, useRef} from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const form = useRef();
    const recaptchaRef = createRef(null) ;

    /**
     * Reset the form fields after the email has been sent
     * @return void
     */
    function resetFields() {
        (document.getElementById("first-name") as HTMLInputElement).value = "";
        (document.getElementById("last-name") as HTMLInputElement).value = "";
        (document.getElementById("email") as HTMLInputElement).value = "";
        (document.getElementById("company") as HTMLInputElement).value = "";
        (document.getElementById("phone-number") as HTMLInputElement).value = "";
        (document.getElementById("message") as HTMLInputElement).value = "";
    }

    /**
     * Send the email using EmailJS
     * @param e
     */
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        recaptchaRef.current.execute();
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

    const onReCAPTCHAChange = (captchaCode: any) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the
        // alert
        toast("🔒 reCAPTCHA executed successfully!")
        // Reset the reCAPTCHA so that it can be executed again if user
        // submits another email.
        recaptchaRef.current.reset();
    }

    return (
        <div className="bg-white dark:bg-slate-800 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                {/* SVG dots */}
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
                                className="text-gray-200 dark:text-gray-600"
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-600 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        Need something fast? Have a unique project in mind? Just want to
                        say hi?
                    </p>
                </div>

                {/* Form */}
                <div className="mt-12">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-slate-300 rounded-md dark:bg-slate-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="company"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Company
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                    className="py-3 px-4 block w-full  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-slate-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    placeholder="555-555-5555"
                                    aria-describedby="phone-optional"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Message
                            </label>
                            <div className="mt-1">
                              <textarea
                                  id="message"
                                  name="message"
                                  rows={4}
                                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md dark:bg-slate-300"
                                  defaultValue={""}
                              />
                            </div>
                        </div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                        />
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
    )
}