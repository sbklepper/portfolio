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

  return (
    <div className='overflow-hidden'>
      <Slider {...settings}>
        <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
          <img
            className='h-12 md:h-16 mx-auto'
            src='/images/logos/wig-logo.png'
            alt='WealthGuard'
          />
        </div>
        <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
          <img
            className='h-12 md:h-16 mx-auto'
            src='/images/logos/edge196.svg'
            alt='Edge196'
          />
        </div>
        <div className='col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1'>
          <img
            className='h-12 md:h-16 mx-auto'
            src='/images/logos/dss.jpg'
            alt='DeLeon Safety'
          />
        </div>
        <div className='col-span-1 flex justify-center items-center md:col-span-2 md:col-start-2 lg:col-span-1'>
          <img
            className='h-12 md:h-16 md:w-28 mx-auto'
            src='/images/logos/ud.png'
            alt='Ultra Demo'
          />
        </div>
        <div className='col-span-2 flex justify-center items-center md:col-span-2 md:col-start-4 lg:col-span-1'>
          <img
            className='h-12 md:h-16 mx-auto'
            src='/images/logos/mHawk.png'
            alt='Melissa Hawkins'
          />
        </div>
      </Slider>
    </div>
  )
}
