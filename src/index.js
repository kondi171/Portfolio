// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Portfolio from './components/Portfolio';
// import './assets/scss/main.scss';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <Portfolio />
//     </React.StrictMode>
// );

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/flow/AppRouter';
import AppProvider from './components/flow/AppContext';
import './assets/scss/main.scss';
ReactDOM.render(
    <StrictMode>
        <AppProvider>
            <Router>
                <AppRouter />
            </Router>
        </AppProvider>
    </StrictMode>,
    document.getElementById('root')
);
