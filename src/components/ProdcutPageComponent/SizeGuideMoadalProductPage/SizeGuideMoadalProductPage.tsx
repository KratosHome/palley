import {SizeGuideMoadalProductPageStyle} from "./SizeGuideMoadalProductPageStyle";
import MayModal from "../../UL/MayModal/MayModal";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";

export const SizeGuideMoadalProductPage = () => {

    const [visible, setVisible] = useState(false)
    const [tab, setTab] = useState(1);
    return (
        <SizeGuideMoadalProductPageStyle>
            <div onClick={() => setVisible(true)} className="titelModal">
                Size guide
            </div>
            <MayModal visible={visible} setVisible={setVisible}>
                <>
                    <div className="titleContainerSizeGuideMoadalProductPage">
                        <div
                            className={tab === 1 ? "activeSizeModalProduct" : "inactiveSizeModalProduct"}
                            onClick={() => setTab(1)}
                        >
                            Dresses
                        </div>
                        <div className={tab === 2 ? "activeSizeModalProduct" : "inactiveSizeModalProduct"}
                             onClick={() => setTab(2)}
                        >Swimwear
                        </div>
                        <div
                            className={tab === 3 ? "activeSizeModalProduct" : "inactiveSizeModalProduct"}
                            onClick={() => setTab(3)}
                        >Shoes
                        </div>
                    </div>
                    <CSSTransition
                        in={tab === 1}
                        classNames="alert"
                        timeout={300}
                        mountOnEnter
                        unmountOnExit
                    >
                        <table>
                            <tbody>
                            <tr>
                                <th>SIZE</th>
                                <th>US / CAN</th>
                                <th>BUST</th>
                                <th>WAIST</th>
                                <th>HIPS</th>
                            </tr>
                            <tr>
                                <td>XS</td>
                                <td>0</td>
                                <td>31"-32"</td>
                                <td>24"-25"</td>
                                <td>34"-35"</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>2-4</td>
                                <td>33"-34"</td>
                                <td>26"-27"</td>
                                <td>36"-37"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>6-8</td>
                                <td>35"-36"</td>
                                <td>28"-29"</td>
                                <td>38"-39"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>10-12</td>
                                <td>37"-39"</td>
                                <td>30"-32"</td>
                                <td>40"-42"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>14</td>
                                <td>40"-42"</td>
                                <td>33"-35"</td>
                                <td>43"-45"</td>
                            </tr>
                            </tbody>
                        </table>
                    </CSSTransition>
                    <CSSTransition
                        in={tab === 2}
                        classNames="alert"
                        timeout={300}
                        mountOnEnter
                        unmountOnExit
                    >
                        <table>
                            <tbody>
                            <tr>
                                <th>SIZE</th>
                                <th>US / CAN</th>
                                <th>BUST</th>
                                <th>WAIST</th>
                                <th>HIPS</th>
                            </tr>
                            <tr>
                                <td>XS</td>
                                <td>0</td>
                                <td>31"-32"</td>
                                <td>24"-25"</td>
                                <td>34"-35"</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>2-4</td>
                                <td>33"-34"</td>
                                <td>26"-27"</td>
                                <td>36"-37"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>6-8</td>
                                <td>35"-36"</td>
                                <td>28"-29"</td>
                                <td>38"-39"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>10-12</td>
                                <td>37"-39"</td>
                                <td>30"-32"</td>
                                <td>40"-42"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>14</td>
                                <td>40"-42"</td>
                                <td>33"-35"</td>
                                <td>43"-45"</td>
                            </tr>
                            </tbody>
                        </table>
                    </CSSTransition>
                    <CSSTransition
                        in={tab === 3}
                        classNames="alert"
                        timeout={300}
                        mountOnEnter
                        unmountOnExit
                    >
                        <table>
                            <tbody>
                            <tr>
                                <th>SIZE</th>
                                <th>US / CAN</th>
                                <th>BUST</th>
                                <th>WAIST</th>
                                <th>HIPS</th>
                            </tr>
                            <tr>
                                <td>XS</td>
                                <td>0</td>
                                <td>31"-32"</td>
                                <td>24"-25"</td>
                                <td>34"-35"</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>2-4</td>
                                <td>33"-34"</td>
                                <td>26"-27"</td>
                                <td>36"-37"</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>6-8</td>
                                <td>35"-36"</td>
                                <td>28"-29"</td>
                                <td>38"-39"</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>10-12</td>
                                <td>37"-39"</td>
                                <td>30"-32"</td>
                                <td>40"-42"</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>14</td>
                                <td>40"-42"</td>
                                <td>33"-35"</td>
                                <td>43"-45"</td>
                            </tr>
                            </tbody>
                        </table>
                    </CSSTransition>
                </>
            </MayModal>
        </SizeGuideMoadalProductPageStyle>
    )
};