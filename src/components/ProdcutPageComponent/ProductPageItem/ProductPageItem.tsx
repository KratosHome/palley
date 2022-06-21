import {ProductPageItemType} from "./ProductPageItemType";
import {ProductPageItemStyle} from "./ProductPageItemSryle";
import {ProductImg} from "../ProductImg/ProductImg";
import {ProductTitle} from "../ProductTitle/ProductTitle";
import {BreadcrumbsComp} from "../../BreadcrumbsComp/BreadcrumbsComp";
import {BuyBarProductPage} from "../BuyBarProductPage/BuyBarProductPage";
import {SizeGuideMoadalProductPage} from "../SizeGuideMoadalProductPage/SizeGuideMoadalProductPage";
import {DeliveryReturnProductPage} from "../DeliveryReturnProductPage/DeliveryReturnProductPage";
import {AskQuestionProductPage} from "../AskQuestionProductPage/AskQuestionProductPage";
import {VersionProduct} from "../VersionProduct/VersionProduct";


export const ProductPageItem: React.FC<ProductPageItemType> = ({item}) => {
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
            <div>frefwerf</div>
        </ProductPageItemStyle>
    )
};


/*
<>



            <div className="col-sx-12 col-sm-5 col-md-5 col-ld-5 container">
              <div className="ProductPageContainerLikes">

                <div className="addToWidhListBordeer">
                  <i className="fa fa-heart addToWidhList" />
                </div>
              </div>
              <div className="ProductPageContainerPrise">
                <div className="ProductPageNameNewPrise">
                  ${product.newPrise} BTS
                </div>
                <div className="ProductPageNamePrise">${product.prise} USD</div>
              </div>
              <Grade grade={product.grade} />
              <div className="ProductPageDiscription">{product.discription}</div>
              <div className="ProductPageSoldLast">
                <span>{product.SoldInTwelveHours}</span> sold in last{" "}
                <span>20</span> Hour
              </div>
              <div className="SoldInTwelveHours">
                HURRY! ONLY <span>{product.remainder}</span>LEFT IN STOCK
              </div>
              <ProgresBar valuePercentage={calkProgreesBar()} />
              <div className="ProductPageContainerModal">
                <div>Size guide</div>
                <div>Delivery & Return</div>
                <div>Ask a Question</div>
              </div>
              {product.size.length > 1 ? (
                <>
                  <span className="ProductSizeSize">SIZE</span>
                  <div className="ProductSize">
                    {product.size.map((size) => (
                      <SizeKlic key={size} size={size} />
                    ))}
                  </div>
                </>
              ) : null}
              {product.color.length > 1 ? (
                <>
                  <span className="ProductSizeSize">COLOR</span>
                  <div className="ProductSize">
                    {product.color.map((color) => (
                      <ProductColor key={color} color={color} />
                    ))}
                  </div>
                </>
              ) : null}
              <div>
                {product.remainder > 1 ? (
                  <>
                    <div className="ProdCounBTN">
                      <ProductCount
                        count={count}
                        maxCount={product.remainder}
                        minCount={minCount}
                        ProductIncriment={ProductIncriment}
                        ProducttDecrement={ProducttDecrement}
                      />
                      <ButtonAddToCart id={product.id} count={count} />
                    </div>
                    <BayItNow />
                  </>
                ) : (
                  <>
                    <div className="NotAvailable">Not available</div>
                    <button>Notify me when</button>
                  </>
                )}
              </div>
              <div className="ProductCategori">
                Categories:{" "}
                {product.categories.map((category) => (
                  <ProductCategori key={category} product={category} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="row ProductInfoFlex">
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon1.png" alt="ff" />
                <span>WORLDWIDE SHIPPING</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon2.png" alt="ff" />
                <span>FREE 60-DAY RETURNS</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon3.png" alt="ff" />
                <span>24 MONTH WARRANTY</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon4.png" alt="ff" />
                <span>100% SECRUE CHECKOUT</span>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs
          discription={product.discription}
          brand={product.BRAND}
          productDiteils={product.PRODUCT_DETAILS}
          sizeFit={product.SIZE_FIT}
          aboutMe={product.ABOUT_ME}
          img={product.img}
          review={product.REVIEW}
        />
        <HotDell />
    </>
 */