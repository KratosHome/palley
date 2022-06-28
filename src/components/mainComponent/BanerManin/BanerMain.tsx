import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay} from "swiper";
import {collectionFirstServer} from "../../../API/TestServer/banerMainServer";
import "swiper/css";
import "swiper/css/pagination";
import "./BanerMain.css"
import BanerMainContent from "./BanerMainContent/BanerMainContent";


export const BanerMain = () => {
    return (
        <>
            <Swiper
                className="mySwiper"
                modules={[Pagination, Autoplay]}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{delay: 2500}}
                pagination={{clickable: true}}
            >
                {collectionFirstServer.map((im) => (
                    <SwiperSlide key={Math.random()}>
                        {im.path.length > 1 ? (
                            <BanerMainContent name={im.name} prise={im.prise} path={im.path}/>
                        ) : null}
                        <img src={im.url} alt={im.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
};