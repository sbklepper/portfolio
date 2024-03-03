import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function CompanySlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
    }

    const companyLogos = [
        {
            id: 1,
            src: '/images/logos/winfields-logo.svg',
            alt: 'Winfields Chocolate Bar',
        },
        {
            id: 2,
            src: '/images/logos/becks-logo.png',
            alt: 'Becks Prime',
        },
        {
            id: 3,
            src: '/images/logos/cBit-logo.png',
            alt: 'C-Bit Trainer',
        },
        {
            id: 4,
            src: '/images/logos/ticHelper-logo.png',
            alt: 'TicHelper',
        },
        {
            id: 5,
            src: '/images/logos/SuperChef-logo.png',
            alt: 'SuperChef',
        },
        {
            id: 6,
            src: '/images/logos/fha-logo.png',
            alt: 'FHA',
        },
        {
            id: 7,
            src: '/images/logos/wig-logo.png',
            alt: 'WealthGuard',
        },
        {
            id: 8,
            src: '/images/logos/edge196.svg',
            alt: 'Edge196',
        },
        {
            id: 9,
            src: '/images/logos/dss.jpg',
            alt: 'DeLeon Safety',
        },
        {
            id: 10,
            src: '/images/logos/ud.png',
            alt: 'Ultra Demo',
        },
        {
            id: 11,
            src: '/images/logos/mHawk.png',
            alt: 'Melissa Hawkins',
        },
    ]

    return (
        <div className='overflow-hidden'>
            <Slider {...settings}>
                {companyLogos.map((company) => (
                    <div key={company.id}
                         className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
                        <img
                            className='h-12 md:h-16 mx-auto'
                            src={company.src}
                            alt={company.alt}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
