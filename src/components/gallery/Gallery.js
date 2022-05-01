import gallery from "../../assets/data/gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import GalleryStyles from "./Gallery.styles";

import "swiper/css";

const Gallery = () => {
  return (
    <GalleryStyles>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{ 1200: { width: 1200, slidesPerView: 1 } }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {gallery.map((item) => (
          <SwiperSlide key={item.id} className='swiper__slide'>
            <img src={item.img} alt='gallery' className='swiper__img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </GalleryStyles>
  );
};

export default Gallery;
