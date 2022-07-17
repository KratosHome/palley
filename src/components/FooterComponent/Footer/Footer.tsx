import visa from "../../../img/icons/pay_copyright.png";
import {Link} from "react-router-dom";
import {FootetStyle} from "./FooterStyle";
import {FooterBlock1} from "../FooterBlock1/FooterBlock1";

export const Footer = () => {
    return (
        <FootetStyle>
            <div className="containerFooter">
                <FooterBlock1/>
                <div className="footerBlock2">
                    <h6>Customer Care</h6>
                    <Link to="/pagination">Pagination</Link>
                    <Link to="/terms_Conditions">Terms & Conditions</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="/">Term of use</Link>
                </div>
                <div className="footerBlock3">
                    <h6>Quick Shop</h6>
                    <Link to="/about_us">About Us</Link>
                    <Link to="/Privacy_Policy">Privacy Policy</Link>
                    <Link to="/Terms_Conditions">Terms & Conditions</Link>
                    <Link to="/Products_Return">Products Return</Link>
                    <Link to="/Wholesale_Policy">Wholesale Policy</Link>
                </div>
                <div className="footerBlock4">
                    <h6>Company</h6>
                    <Link to="/help_center">Help Center</Link>
                    <Link to="/address_store">Address Store</Link>
                    <Link to="/privacy_policy">Privacy Policy</Link>
                    <Link to="/receivers_amplifiers">Receivers & Amplifiers</Link>
                    <Link to="/palleyStore">PalleyStore</Link>
                </div>
            </div>
            <div className="footerBlock5">
                <div>
                    © Copyright 2021 | PalleyStore By
                    <a className="tvitera" href="http://shopilaunch.com/" target="_blank" rel="noreferrer">
                        {" "}
                        ShopiLaunch.
                    </a>{" "}
                    Powered by Shopify.
                </div>
                <div>
                    <img className="footerBlokVisa" src={visa} alt="Palley"/>
                </div>
            </div>
        </FootetStyle>
    )
};