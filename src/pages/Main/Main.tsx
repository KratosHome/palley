import {BanerMain} from "../../components/BanerManin/BanerMain";
import {BestSeler} from "../../components/BestSeler/BestSeler";
import {CollectionFirst} from "../../components/collectionFirst/collectionFirst";
import {bestSelerServer} from "../../API/TestServer/bestSelerServer";
import {collectionFirstServer} from "../../API/TestServer/collectionFirstServer";
import {InfoBlokMain} from "../../components/InfoBlokMain/InfoBlokMain";
import imgInfoBlock from "../../img/baner/product_page2.jpg"
import {TestimonialsHome} from "../../components/TestimonialsHome/TestimonialsHome";

export const Main = () => {
    return (
        <>
            <BanerMain/>
            <CollectionFirst
                collection={collectionFirstServer}
            />
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
            <TestimonialsHome/>
        </>
    )
};