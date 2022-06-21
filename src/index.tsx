import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {themeStyle} from "./themaStyle";
import { store } from './store/createStore';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={themeStyle}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

