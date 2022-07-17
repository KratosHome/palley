import React from 'react';
import { BreadcrumbsComp } from '../../components';
import {AboutUsStyle} from './AboutUsStyle';

const AboutUs = () => {
    return (
        <AboutUsStyle>
            <div className="titelAboutUs">
                <h1>About Us</h1>
                <BreadcrumbsComp/>
            </div>
            <div className="containerAboutUs">
                <h2>Unique & Stylist Fashion
                    We Are An Awesome Agency.</h2>
            </div>
        </AboutUsStyle>
    );
};

export default AboutUs;