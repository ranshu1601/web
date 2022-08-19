import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


  // import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';






const data = [
  {
    avatar : AVTR1,
    name: 'Tine Snow',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum repellendus minima veniam temporibus accusantium dolorem laboriosam numquam iusto eveniet aperiam maxime eius quas deserunt ratione aut, doloremque aspernatur quisquam ex!? "
  },

  {
    avatar : AVTR2,
    name: 'Ashutosh Ranjan',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus minima veniam temporibus accusantium dolorem laboriosam numquam iusto eveniet aperiam maxime eius quas deserunt ratione aut, doloremque aspernatur quisquam ex!?"
  },

  {
    avatar : AVTR3,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus minima veniam temporibus accusantium dolorem laboriosam numquam iusto eveniet aperiam maxime eius quas deserunt ratione aut, doloremque aspernatur quisquam ex!?'
  },

  {
    avatar : AVTR4,
    name: 'Tine Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus minima veniam temporibus accusantium dolorem laboriosam numquam iusto eveniet aperiam maxime eius quas deserunt ratione aut, doloremque aspernatur quisquam ex!?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

       <Swiper className='container testimonials__container' 
        modules={[Pagination]}
        spaceBetween = {40}
        slidesPerView={1}
        pagination={{clickable: true}} >
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                  <div className='client__avatar'>
                    <img src={avatar} />
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'> {review} </small>
               </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials