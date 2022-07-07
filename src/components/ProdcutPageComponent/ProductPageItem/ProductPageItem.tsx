import {ProductPageItemType} from "./ProductPageItemType";
import {ProductPageItemStyle} from "./ProductPageItemSryle";
import ProductImg from "../ProductImg/ProductImg";
import ProductTitle from "../ProductTitle/ProductTitle";
import BreadcrumbsComp from "../../BreadcrumbsComp/BreadcrumbsComp";
import BuyBarProductPage from "../BuyBarProductPage/BuyBarProductPage";
import {SizeGuideMoadalProductPage} from "../SizeGuideMoadalProductPage/SizeGuideMoadalProductPage";
import {DeliveryReturnProductPage} from "../DeliveryReturnProductPage/DeliveryReturnProductPage";
import {AskQuestionProductPage} from "../AskQuestionProductPage/AskQuestionProductPage";
import {VersionProduct} from "../VersionProduct/VersionProduct";
import {memo} from "react";
import InfoCheckoutProductPage from "../InfoCheckoutProductPage/InfoCheckoutProductPage";
import TabsProductPage from "../TabsProductPage/TabsProductPage";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import BestSeler from "../../mainComponent/BestSeler/BestSeler";
import {hotDealServer} from "../../../API/TestServer/hotDellServer";

const ProductPageItem: React.FC<ProductPageItemType> = ({item}) => {
    return (
        <ProductPageItemStyle>
            <div>
                <BreadcrumbsComp/>
                <ProductImg img={item.cart_img}/>
            </div>
            <div>
                <ProductTitle
                    name={item.name}
                    prise={item.prise}
                    newPrise={item.newPrise}
                    grade={item.grade}
                />
                <div className="descriptionProductPageItem">{item.description}</div>
                <div className="soldLastProductPageItem">
                    <span>{item.soldInTwelveHours}</span> sold in last{" "}
                    <span>20</span> Hour
                </div>
                <BuyBarProductPage remainder={item.remainder}/>
                <div className="modalContainerProductPage">
                    <SizeGuideMoadalProductPage/>
                    <DeliveryReturnProductPage/>
                    <AskQuestionProductPage/>
                </div>
                <VersionProduct productProd={item.prod} product={item}/>
            </div>
            <div className="gridBoxProductPageItem">
                <InfoCheckoutProductPage/>
                <TabsProductPage
                    discription={item.description}
                    brand={item.brand_discription}
                    productDiteils={item.product_details}
                    sizeFit={item.size_fit}
                    aboutMe={item.about_me}
                    img={item.cart_img[0]}
                    reviews={item.review}
                />
                <div className="socialNetworkProductPageItem">
                    <a href="https://www.facebook.com/">
                        <FaTwitter/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaInstagram/>
                    </a>
                </div>
                <BestSeler
                    h3="RELATED PRODUCTS"
                    text=""
                    products={hotDealServer}
                />
            </div>
        </ProductPageItemStyle>
    )
};

export default memo(ProductPageItem);