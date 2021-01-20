import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Routes from './routes';
import ReduxThunk from 'redux-thunk';

import './css/style.css';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

/* creating redux store with middleware as we are hitting api in future */

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);