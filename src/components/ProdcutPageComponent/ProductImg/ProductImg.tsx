import {ProductImgType} from "./ProductImgType";
import {ProductImgStyle} from "./ProductImgStyle";
import {memo} from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductImg: React.FC<ProductImgType> = ({img}) => {
    return (
        <ProductImgStyle>
            <Carousel
                emulateTouch={true}
                infiniteLoop={true}
            >
                {img.map((item: any) =>
                    <div key={item}>
                        <img src={item}/>
                    </div>
                )}
            </Carousel>
        </ProductImgStyle>
    )
};

export default memo(ProductImg);