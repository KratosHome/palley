import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {themeStyle} from "./themaStyle";
import { Provider } from 'react-redux';
import {setupStore} from "./store/rootReducer";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={themeStyle}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

