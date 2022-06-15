import React, {useState} from "react";
import logo from "../../img/icons/logo.png";
import cart from "../../img/icons/cart.png";
import search from "../../img/icons/search.png";
import personal_area from "../../img/icons/personal_area.png";
import like from "../../img/icons/like.png";
import {HeaderStyles} from "./HeaderStyle";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {Link} from "react-router-dom";
import {HeaderCard} from "./HeaderCard/HeaderCard";


export const Header = () => {
    return (
        <>
            <HeaderStyles>
                <div className="container">
                    <Link to="/" className="logo">
                        <img className="logo" src={logo} alt="Palley"/>
                    </Link>
                </div>
                <div className="menu">
                    <HeaderMenu/>
                </div>
                <div className="navBar">
                    <img src={search} alt="search"/>
                    <img className="headerCabinet" src={personal_area} alt="headerCabinet"/>
                    <img src={like} alt="like"/>
                    <HeaderCard/>
                </div>
            </HeaderStyles>
        </>
    );
};


