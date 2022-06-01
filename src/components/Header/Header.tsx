import React, {useState} from "react";
import logo from "../../img/icons/logo.png";
import search from "../../img/icons/search.png";
import personal_area from "../../img/icons/personal_area.png";
import like from "../../img/icons/like.png";
import {HeaderStyles} from "./HeaderStyle";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";



export const Header = () => {

    return (
        <>
            <HeaderStyles>
                <div className="container">
                    <a className="logo">
                        <img className="logo" src={logo} alt="Palley"/>
                    </a>
                </div>
                <div className="menu">
                    <HeaderMenu />
                </div>
                <div className="navBar">

                </div>
            </HeaderStyles>
        </>
    );
};


