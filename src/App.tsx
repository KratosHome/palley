import React from 'react';
import "./components/fonts/fonts.css"
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./GlobalStyle";
import {AppRouter} from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
