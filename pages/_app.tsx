import type {AppProps} from "next/app";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
// Helpers
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import {ToastContainer} from 'react-toastify'
import {ThemeProvider} from 'next-themes'
// Styles
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/style.css';

export default function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
            person_profiles: 'identified_only',
            defaults: '2025-05-24',
            loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') posthog.debug()
            }
        })
    }, [])

    return (
        <>
            <PostHogProvider client={posthog}>
                <ThemeProvider attribute="class">
                    <Component {...pageProps} />
                    <ToastContainer/>
                </ThemeProvider>
            </PostHogProvider>
        </>
    )
}