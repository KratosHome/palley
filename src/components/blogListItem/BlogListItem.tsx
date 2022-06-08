import {BloaListItemStyle} from "./BlogListItemStyle";
import {BlogListItemType} from "./BlogListItemType";
import {MayButton} from "../UL/MayButton/MayButton";


export const BlogListItem: React.FC<BlogListItemType> = ({id, title, content, img, revers}) => {


    return (
        <BloaListItemStyle revers={revers}>
            <div>
                <h5>{title}</h5>
                {content.length > 350 ?
                    <div className="BlogListItemContent">{content.substring(0, 350)}...</div>
                    :
                    <div className="BlogListItemContent">{content}</div>
                }
                <MayButton>Read More</MayButton>
            </div>
            <img src={img} alt="title"/>
        </BloaListItemStyle>
    )
};