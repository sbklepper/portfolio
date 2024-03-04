import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { companyLogos } from '../data/logos'

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
