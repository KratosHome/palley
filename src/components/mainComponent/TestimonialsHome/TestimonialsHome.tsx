import {TestimonialsHomeStyle} from "./TestimonialsHomeSryle";
import {testimonialsHomeServer} from "../../../API/TestServer/testimonialsHomeServer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, Navigation} from "swiper";
import Rating from '@mui/material/Rating';

export const TestimonialsHome = () => {
    return (
        <TestimonialsHomeStyle>
            <h3>TESTIMONIALS</h3>
            <div className="caruselHeigth ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper1"
                >
                    {testimonialsHomeServer.map((item: any) => (
                        <SwiperSlide key={item.name}>
                            <div className="testimonialsItemContainer">
                                <div className="testimonialsItemText">{item.text}</div>
                                <Rating name="size-medium" defaultValue={item.grade} readOnly/>
                                <img className="testimonialsItemContainerItemImg"
                                     src={item.image}
                                     alt={item.name}
                                />
                                <div className="testimonialsItemName">{item.name}</div>
                                <div className="testimonialsItemPosition">{item.position}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </TestimonialsHomeStyle>
    )
};