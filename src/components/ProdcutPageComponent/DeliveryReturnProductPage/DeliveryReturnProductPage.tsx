import {DeliveryReturnProductPageStyle} from "./DeliveryReturnProductPageStyle";
import {useState} from "react";
import MayModal from "../../UL/MayModal/MayModal";


export const DeliveryReturnProductPage = () => {

    const [visible, setVisible] = useState(false)
    return (
        <DeliveryReturnProductPageStyle>
            <div onClick={() => setVisible(true)} className="titelModal">
                Delivery & Return
            </div>
            <MayModal visible={visible} setVisible={setVisible}>
                <>
                    <h3>Delivery</h3>
                    <p> All orders shipped with UPS Express.</p>
                    <p> Always free shipping for orders over US $250.</p>
                    <p> All orders are shipped with a UPS tracking number.</p>
                    <h3>
                        Returns
                    </h3>
                    <p>Items returned within 14 days of their original shipment date in same as new condition will be
                        eligible for a full refund or store credit.</p>
                    <p> Refunds will be charged back to the original form of payment used for purchase.</p>
                    <p> Customer is responsible for shipping charges when making returns and shipping/handling fees of
                        original purchase is non-refundable.</p>
                    <p> All sale items are final purchases.</p>
                    <h3>Help</h3>
                    <p>Give us a shout if you have any other questions and/or concerns.</p>
                    <p>Email: <a href="mailto:OlegonTkach101@gmail.com"> OlegonTkach101@gmail.com</a></p>
                    <p> Phone: <a href="tel:+380630210567"> +380630210567</a></p>
                </>
            </MayModal>
        </DeliveryReturnProductPageStyle>
    )
};