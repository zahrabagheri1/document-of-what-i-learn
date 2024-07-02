import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
interface SliderProps {
  images: string[]
}

const Slider: React.FC<SliderProps> = ({ images }): JSX.Element => {
  return (
    // <Swiper spaceBetween={100} modules={[Navigation]} navigation slidesPerView={1}>
      <Swiper spaceBetween={120} slidesPerView={1}>
        {/* <SwiperSlide>
        <img src={'https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/otnavcsx.lpp.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/dvdt0xvt.vbw.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/mvdck1qu.ac0.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={'https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/nnadmteb.4rg.jpg'} />
        </SwiperSlide> */}

        {images?.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}

      </Swiper>
  );
};


export default Slider;


// function Index() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// }

// export default Index;
