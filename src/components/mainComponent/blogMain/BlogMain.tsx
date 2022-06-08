import {BlogMainStyle} from "./BlogMainSryle";
import {BlogListItem} from "../../blogListItem/BlogListItem";
import {blogMainServer} from "../../../API/TestServer/blogMainServer";

export const BloagMain = () => {

    return (
        <BlogMainStyle>
            <h3>
                OUR BLOG
            </h3>
            {blogMainServer.map(item =>
                <BlogListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    img={item.img}
                    revers={item.revers}
                />
            )}
        </BlogMainStyle>
    )
};