import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "@/components/Providers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
);
