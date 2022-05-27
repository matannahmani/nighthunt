import { Mousewheel, FreeMode } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import GenreBox from './GenreBox';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import { ReactElement } from 'react';

export const CategoryList = ({ children }: { children: ReactElement[] }) => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={24}
      slidesPerView={'auto'}
      mousewheel={true}
      freeMode={true}
      style={{ padding: '0px 8px' }}
      modules={[Mousewheel, FreeMode]}
      className="mySwiper"
    >
      {children.map((node, index) => (
        <SwiperSlide style={{ width: 'auto' }} key={`p-${node.key}`}>
          {node}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryList;
