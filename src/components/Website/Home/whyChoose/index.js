import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "./styles.scss";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const WhyChoose = () => {
  const pagination = {
    el: ".custom-pag",
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };

  return (
    <section className={`whyChoose`}>
      <div className="wrapper">
        <div className="choose-head">
          <h2>Our Feature</h2>
          <p>
            Learning day desirous informed expenses material returned six the.
            She enabled invited exposed him another. Reasonably conviction
            solicitude me mr at discretion reasonable. Age out full gate bed day
            lose.
          </p>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          pagination={pagination}
          className={"wrappe"}
          loop
          autoHeight={true}
          // centeredSlides={false}
          // autoplay={true}
          speed={3000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="wrappe">
              <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"wrappe"}>
              <h1>Prowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrappe">
              <h1>Trowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrappe">
              <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"wrappe"}>
              <h1>Prowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrappe">
              <h1>Trowdfunding Real Estate Investment in Diaspora</h1>
              <p>
                Leveraging on tusted Gateway to Financial Freedom. Fast and
                flexible finance to great, stable returns for investors. . Get
                started quickly and make your way.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`custom-pag`}></div>
      </div>
    </section>
  );
};

export default WhyChoose;
