import React from 'react';
import "./components/fonts/fonts.css"
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./GlobalStyle";
import {AppRouter} from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/FooterComponent/Footer/Footer";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
