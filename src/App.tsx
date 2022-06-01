import React from 'react';
import "./components/fonts/fonts.css"
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./GlobalStyle";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header/>
        </div>
    );
}

export default App;
