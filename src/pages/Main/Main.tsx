import {BanerMain} from "../../components/mainComponent/BanerManin/BanerMain";
import {BestSeler} from "../../components/mainComponent/BestSeler/BestSeler";
import {CollectionFirst} from "../../components/mainComponent/collectionFirst/collectionFirst";
import {bestSelerServer} from "../../API/TestServer/bestSelerServer";
import {collectionFirstServer} from "../../API/TestServer/collectionFirstServer";
import {InfoBlokMain} from "../../components/mainComponent/InfoBlokMain/InfoBlokMain";
import imgInfoBlock from "../../img/baner/product_page2.jpg"
import {TestimonialsHome} from "../../components/mainComponent/TestimonialsHome/TestimonialsHome";
import {hotDealServer} from "../../API/TestServer/hotDellServer";
import {BloagMain} from "../../components/mainComponent/blogMain/BlogMain";

export const Main = () => {
    return (
        <div className="containerMain">
            <BanerMain/>
            <CollectionFirst
                collection={collectionFirstServer}
            />
            <div>
                ewr
            </div>
            <BestSeler
                h3="best seler"
                text="Best Seller Product This Week!"
                products={bestSelerServer}
            />
            <InfoBlokMain
                img={imgInfoBlock}
                h3Text={"POUCH WITH POCKET"}
                contentText={"Forsake bulky cases without compromising protectiveness"}
                buttonText={"show now"}
            />
            <BestSeler
                h3="Hot Deal"
                text="Don't Miss Today's Featured Deals"
                products={hotDealServer}
            />
            <TestimonialsHome/>
            <BloagMain/>
        </div>
    )
};