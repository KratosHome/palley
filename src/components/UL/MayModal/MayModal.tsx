import {MayModalStyle} from "./MayModalStyle";
import {MayModalType} from "./MayModalType";
import {CSSTransition} from 'react-transition-group';
import {memo} from "react";


const MayModal: React.FC<MayModalType> = ({
                                              children,
                                              visible,
                                              setVisible,
                                          }) => {

    return (
        <MayModalStyle>
            <CSSTransition
                in={visible}
                timeout={500}
                classNames="my-node"
                mountOnEnter
                unmountOnExit
            >
                <div
                    className={visible ? "myModal" : ""}
                    onClick={() => setVisible(false)}
                >
                    <div
                        className="myModalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="buttomCloseModal"
                            onClick={() => setVisible(false)}
                        >
                            x
                        </button>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </MayModalStyle>
    )
};

export default memo(MayModal);