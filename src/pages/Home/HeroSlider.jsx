import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./home.css";
import { Link } from "react-router-dom";
import { sliderData } from "../../../data";

export default function HeroSlider() {
    return (
        <div className="hero">
            <div className="container">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {sliderData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="content">
                                <h4>{slide.subtitle}</h4>
                                <h3>
                                    {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                                    {slide.title.split(" ").slice(2).join(" ")}
                                </h3>
                                <p>{slide.desc}</p>
                                <Link to="/" className="btn">
                                    Shop Now
                                </Link>
                            </div>

                            <img src={slide.img} alt={slide.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
