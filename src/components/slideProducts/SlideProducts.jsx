import Products from "./products";
import "./slideproducts.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function SlideProducts({ title, description, data }) {

    if (!data) return null;

    return (
        <div className="slide-products slide">
            <div className="container">
                <div className="top-slide">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 4200,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Products item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}