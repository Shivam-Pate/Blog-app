import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store   from './Redux/Store.js';
import { persistor } from './Redux/Store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PersistGate persistor={persistor}>
    <Provider store={store}>
     
        <App />
     
    </Provider>
    </PersistGate>
    </React.StrictMode>
);