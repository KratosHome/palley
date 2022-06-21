import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFlip, Pagination} from "swiper";
import {ProductImgType} from "./ProductImgType";

import "swiper/css/grid"
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import {ProductImgStyle} from "./ProductImgStyle";


export const ProductImg: React.FC<ProductImgType> = ({img}) => {
    return (
        <ProductImgStyle>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination]}
                className="mySwiper"
            >
                {img.map((item: any) =>
                    <SwiperSlide key={item}>
                        <img src={item} alt={item.name} />
                    </SwiperSlide>
                )}
            </Swiper>
        </ProductImgStyle>
    )
};