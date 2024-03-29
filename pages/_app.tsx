import type {AppProps} from "next/app";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import * as gtag from '@/lib/gtag'
import Script from 'next/script'
import {ToastContainer} from 'react-toastify'
import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/style.css';

export default function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            {/* Global Site Tag (gtag.ts) - Google Analytics */}
            <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id='gtag-init'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
                <ToastContainer/>
            </ThemeProvider>
        </>
    )
}
