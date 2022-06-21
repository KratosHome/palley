import {VersionProductStyle} from "./VersionProductStyle";
import {useState} from "react";

type versionProductType = {
    item: any
}
export const VersionProduct: React.FC<versionProductType> = ({item}) => {

    const [size, setSize] = useState(item[0].size)
    const [id, setId] = useState(item[0].id)
    const [maxCount, setMaxCount] = useState(item[0].count)
    console.log(id)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMaxCount(item[0].count)
    }
    const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setSize(e.currentTarget.value)
        setId(e.currentTarget.id)
    }


    const [count, setCount] = useState(1);

    const minCount = 1;

    function ProductIncriment(e: any) {
        e.preventDefault();
        setCount(count + 1);
    }

    function ProducttDecrement(e: any) {
        e.preventDefault();
        setCount(count - 1);
    }


    return (
        <VersionProductStyle>
            <div className="textVersionProduct">SIZE</div>
            <form onSubmit={handleSubmit}>
                <div className="variantContainerVersionProduct">
                    {item.map((it: any) =>
                        <div key={it.id}>
                            <input
                                id={it.id}
                                className={it.size === size ? "selectedVersionProduct" : "versionProduct"}
                                onClick={handleClick}
                                type="button"
                                name={"lable"}
                                key={it.id}
                                value={it.size}
                            />
                        </div>
                    )}
                </div>
                <div className="countContainerVersionProduct">
                    <button
                        className="incrementVersionProduct"
                        onClick={(e) => ProductIncriment(e)}
                        disabled={count >= maxCount}
                    />
                    <input className="countInputVersionProduct" value={count} readOnly/>
                    <button
                        className="decrementVersionProduct"
                        onClick={(e) => ProducttDecrement(e)}
                        disabled={count <= minCount}
                    />
                </div>
            </form>
        </VersionProductStyle>
    )
};