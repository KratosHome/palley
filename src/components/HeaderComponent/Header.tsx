import React from "react";
import logo from "../../img/icons/logo.png";
import search from "../../img/icons/search.png";
import like from "../../img/icons/like.png";
import {HeaderStyles} from "./HeaderStyle";
import {HeaderMenu} from "./HeaderMenu";
import {Link} from "react-router-dom";
import {HeaderCard} from "./HeaderCard";
import InputCabinet from "./InputCabinet/InputCabinet";

export const Header = () => {
    return (
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
                <InputCabinet/>
                <img src={like} alt="like"/>
                <HeaderCard/>
            </div>
        </HeaderStyles>
    );
};


