import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCreative } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Import custom components
import Hero from './Hero';
import Hero2 from './Hero2';

// Register Swiper modules
SwiperCore.use([Autoplay, EffectCreative]);

function HeroContainer() {
  return (
    <div>
      <section>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000, // Increase delay to 5 seconds
            disableOnInteraction: false,
          }}
          className="mySwiper5"
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Hero2 />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default HeroContainer;
