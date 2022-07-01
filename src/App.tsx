import React, {useEffect} from 'react';
import "./components/fonts/fonts.css"
import {Header} from "./components/HeaderComponent/Header";
import {GlobalStyle} from "./GlobalStyle";
import {AppRouter} from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/FooterComponent/Footer/Footer";
import {fetshExchangeRateAction} from "./store/action/getProductAction";
import {useAppDispatch} from "./hooks/useRedux";
import UseScrollToTop from "./hooks/useScrolToTop";


function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetshExchangeRateAction())
    }, [dispatch]);


    return (
        <BrowserRouter>
            <UseScrollToTop/>
            <GlobalStyle/>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
