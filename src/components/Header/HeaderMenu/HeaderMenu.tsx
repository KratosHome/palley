import {MenuStyle} from "./MenuStyle"
import {menuServer} from "../../../API/TestServer/menuServer";
import personal_area from "../../../img/icons/personal_area.png";
import {useState} from "react";

export const HeaderMenu = () => {
    const [menuActive, setMenuActiv] = useState(false)

    return (
        <>
            <MenuStyle>
                <nav>
                    <div className="menuMobOpen" onClick={() => setMenuActiv(!menuActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={menuActive ? "menu animateMenuOpen" : "menu animatemenuClose"}>
                        <div className="menuMobClose" onClick={() => setMenuActiv(!menuActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Menu</div>
                        </div>
                        <div className="menuCabinet">
                            <a className="menuCabinetLink" href="/personal_area">
                                <img src={personal_area} alt="personal_area"/>
                                <div className="menuOpenCabinet">login</div>
                            </a>
                        </div>
                        {menuServer.map(item =>
                            <li>
                                <a>{item.name}</a>
                                <ul className="cubMenu">
                                    {item.CubMenu.map(item =>
                                        <li>
                                            <a>{item.name}</a>
                                            {item.secondMenu.map(item =>
                                                <ul className="secondMenu">
                                                    <li>
                                                        <a>{item.name}</a>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                    </ul>

                </nav>
            </MenuStyle>
        </>
    )
};