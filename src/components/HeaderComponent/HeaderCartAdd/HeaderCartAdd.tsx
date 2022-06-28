import React, { memo } from 'react';
import {HeaderAddType} from "./HeaderCardType";
import {HeaderAddStyle} from "./HeaferCartAddStyle";


const HeaderCartAdd: React.FC<HeaderAddType> = ({productAdd}) => {
    console.log(productAdd)
    return (
        <HeaderAddStyle>
            {productAdd.map((item: any) =>
                <div key={Math.random()}>
                    <img src={item.cart_img[0]} alt={item.name}/>
                    <div>{item.name}</div>
                    <div>size: {item.size}</div>
                    <div>QTY: {item.count}</div>
                    <div>${item.prise}</div>
                    <div>${item.newPrise}</div>
                </div>
            )}
            <div>Total: </div>
            <div>
                <div>view cart</div>
                <div>check out</div>
            </div>
        </HeaderAddStyle>
    );
};

export default memo(HeaderCartAdd);