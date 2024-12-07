import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from './img/rating.png';
import user from './img/Avatar.png';
import user2 from './img/Avatar2.png'
import user5 from './img/Avt5.png'
import user4 from './img/avt4.png'
import user3 from './img/AVT3.png'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Swiper.scss';

import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1} 
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          900: {
            slidesPerView: 3, 
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 2, 
            spaceBetween: 30,
          },
        }}
      >
    
        <SwiperSlide className="sw">
          <img src={Rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="userr">
            <img src={user} alt="" />
            <div className="user_text">
              <h4>Paula Brooks</h4>
              <h5>Business Analyst</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={Rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="userr">
            <img src={user2} alt="" />
            <div className="user_text">
              <h4>Paula Brooks</h4>
              <h5>Business Analyst</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={Rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="userr">
            <img src={user3} alt="" />
            <div className="user_text">
              <h4>Paula Brooks</h4>
              <h5>Business Analyst</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={Rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="userr">
            <img src={user4} alt="" />
            <div className="user_text">
              <h4>Paula Brooks</h4>
              <h5>Business Analyst</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={Rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="userr">
            <img src={user5} alt="" />
            <div className="user_text">
              <h4>Paula Brooks</h4>
              <h5>Business Analyst</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
