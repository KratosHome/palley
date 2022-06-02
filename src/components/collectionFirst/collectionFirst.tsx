import {CollectionFirstStyle} from "./CollectionFirstStyle";
import {collectionFirstServer} from "../../API/TestServer/collectionFirstServer";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay, Navigation} from "swiper";
import {useWindowSize} from "../../hooks/useWindowSize";

export const CollectionFirst = () => {

    const [width] = useWindowSize();

    function counInstagramSlider() {
        let  responsive = 6
        if (+width <= 640) {
            responsive = 1
        } else if (+width <= 989) {
            responsive = 2
        } else if (+width <= 1367) {
            responsive = 3
        } else if (+width <= 1675) {
            responsive = 4
        } else if (+width <= 2062) {
            responsive = 5
        } else if (+width <= 2300) {
            responsive = 6
        }
        return responsive;
    }


    return (
        <CollectionFirstStyle>
            <Swiper
                slidesPerView={counInstagramSlider()}
                spaceBetween={20}
                slidesPerGroup={1}
                autoplay={{
                    delay: 2000,
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
                {collectionFirstServer.map(item => (
                    <SwiperSlide key={item.url}>
                        <div className="CollectionFirst">
                            <img src={item.url} alt={item.alt}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CollectionFirstStyle>

    )
};