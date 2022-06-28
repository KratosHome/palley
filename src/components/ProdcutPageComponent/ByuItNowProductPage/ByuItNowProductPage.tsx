import React, {memo, useState} from 'react';
import MayButtonForm from '../../UL/MayButtonForm/MayButtonForm';
import MayModal from '../../UL/MayModal/MayModal';
import {BuyItNowProductPageStyle} from "./BuyItNowProductPageStyle";

const ByuItNowProductPage = () => {
    const [visible, setVisible] = useState(false)
    return (
        <BuyItNowProductPageStyle>
            <div className="containerButtonBuyItNow">
                <MayButtonForm
                    backgroundColor={"#000000"}
                    colorText={"white"}
                    onClick={() => setVisible(!visible)}
                >
                    buy it now
                </MayButtonForm>
                <MayModal visible={visible} setVisible={setVisible}>
                    <div>
                        fdvsdf
                    </div>
                </MayModal>
            </div>
        </BuyItNowProductPageStyle>
    );
};

export default memo(ByuItNowProductPage);