import {CollectionFirstStyle} from "./CollectionFirstStyle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, Navigation} from "swiper";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {Link} from "react-router-dom";
import {CollectionFirstType} from "./CollectionFirstType";
import {memo} from "react";


const CollectionFirst: React.FC<CollectionFirstType> = ({
                                                            collection
                                                        }) => {
    const [width] = useWindowSize();

    function quantityImg() {
        let responsive = 4
        if (+width <= 640) {
            responsive = 1
        } else if (+width <= 989) {
            responsive = 2
        } else if (+width <= 1367) {
            responsive = 3
        } else if (+width <= 1675) {
            responsive = 4
        }
        return responsive;
    }

    return (
        <CollectionFirstStyle>
            <Swiper
                slidesPerView={quantityImg()}
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
                {collection.map((item: any) => (
                    <SwiperSlide key={item.url}>
                        <Link to={item.path}>
                            <div className="CollectionFirst">
                                <img src={item.url} alt={item.alt}/>
                            </div>
                            <div className="CollectionFirstName">{item.name}</div>
                            <div className="CollectionFirstText">{item.text}</div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CollectionFirstStyle>

    )
};

export default memo(CollectionFirst);