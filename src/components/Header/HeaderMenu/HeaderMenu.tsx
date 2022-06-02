import {MenuStyle} from "./MenuStyle"
import {menuServer} from "../../../API/TestServer/menuServer";
import personal_area from "../../../img/icons/personal_area.png";
import {useState} from "react";
import {Link} from "react-router-dom";

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
                            <Link className="menuCabinetLink" to="/cabinet">
                                <img src={personal_area} alt="personal_area"/>
                                <div className="menuOpenCabinet">login</div>
                            </Link>
                        </div>
                        {menuServer.map(item =>
                            <li key={item.id}>
                                <Link to={item.path}>{item.name}</Link>
                                <ul className="cubMenu">
                                    {item.CubMenu.map(item =>
                                        <li key={item.id}>
                                            <Link to={item.path}>{item.name}</Link>
                                            <ul className="secondMenu">
                                                {item.secondMenu.map(item =>
                                                    <li key={item.id}>
                                                        <Link to={item.path}>{item.name}</Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className={menuActive ? "menuBlureOpen" : "menuBlureClose"}
                     onClick={() => setMenuActiv(!menuActive)}></div>
            </MenuStyle>
        </>
    )
};