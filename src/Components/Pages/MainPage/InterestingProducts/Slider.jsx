import React from 'react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({pictureData}) => {
    return (
        <div className="slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
            >
                {pictureData.map((pic,index) => <SwiperSlide key={index}>
                    <img style={{width: "100%"}} src={pic.img}
                         alt={pic.name}/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider;