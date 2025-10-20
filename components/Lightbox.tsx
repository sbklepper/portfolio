import React, { useEffect } from 'react';
// Helpers
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// Styles
import 'photoswipe/style.css';

interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function Lightbox({src, alt, width, height}: Image) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallerySelector: '.pswp-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery" id={alt}>
                <a
                    href={src}
                    data-pswp-width={width}
                    data-pswp-height={height}
                    key={alt}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={src} className='object-center object-cover hover:cursor-pointer' alt={alt} />
                </a>
        </div>
    );
}