import {FC, memo} from "react";
import { MayButton } from "../UL";
import {BloaListItemStyle} from "./BlogListItemStyle";
import {BlogListItemType} from "./BlogListItemType";


export const BlogListItem: FC<BlogListItemType> = memo(({id, title, content, img, revers}) => {
    return (
        <BloaListItemStyle revers={revers}>
            <div>
                <h5>{title}</h5>
                {content.length > 350 ?
                    <div className="BlogListItemContent">{content.substring(0, 350)}...</div>
                    :
                    <div className="BlogListItemContent">{content}</div>
                }
                <MayButton
                    backgroundColor={"white"}
                    colorText={"black"}
                    linkTo={"/"}
                >
                    Read More
                </MayButton>
            </div>
            <img src={img} alt="title"/>
        </BloaListItemStyle>
    )
});
