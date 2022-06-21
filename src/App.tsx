import React, {useEffect} from 'react';
import "./components/fonts/fonts.css"
import {Header} from "./components/HeaderComponent/Header";
import {GlobalStyle} from "./GlobalStyle";
import {AppRouter} from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/FooterComponent/Footer/Footer";
import {useDispatch} from "react-redux";
import {getProductAction} from "./store/action/getProductAction";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        getProductAction()(dispatch)
    }, [dispatch]);


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
