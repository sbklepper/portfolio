import Head from 'next/head'
import Script from 'next/script'
import Footer from './Footer'
import Header from './Header'
import React from "react";

type LayoutProps = {
    title: string
    description: string
    keywords: string
    url: string
    urlImage: string
    children: React.ReactNode
}

export default function Layout({
   children,
   title,
   keywords,
   description,
   url,
   urlImage,
}: LayoutProps) {
    return (
        <div className={'dark:bg-slate-800'}>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
                <link rel='icon' href='/favicon.ico'/>
                <meta property='og:title' content={title}/>
                <meta property='og:description' content={description}/>
                <meta property='og:image' content={urlImage}/>
                <meta property='og:url' content={url}/>
                <meta property='og:type' content='website'/>
                <meta name='twitter:card' content='summary_large_image'/>
                <meta name='twitter:title' content={title}/>
                <meta name='twitter:description' content={description}/>
                <meta name='twitter:image' content={urlImage}/>
                <link rel='stylesheet' href='https://rsms.me/inter/inter.css'/>
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                />
            </Head>
            <Header/>
            <main>{children}</main>
            <Script src='https://cdn.jsdelivr.net/npm/marked/marked.min.js'/>
            <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Sam Klepper | Full Stack Software Developer',
    keywords: 'Sam Klepper, Samuel Klepper, samklepdev, software developer, software engineer, web development, web design, website design, web app, application development, web developer, website builder, full-stack, web app, web application, React, JavaScript, NextJS, DotNET, C#, MongoDB, Redux, programming, UI/UX, graphic design, logo design, responsive web design, web development Houston, Houston, TX, Cypress, Texas, affordable website design, web design for small businesses, infographics design services',
    description: 'Sam Klepper is a full-stack software developer residing in Houston, TX',
    url: 'https://www.samklep.dev/',
    urlImage: 'https://www.samklep.dev/images/circuit-board.jpeg',
}
