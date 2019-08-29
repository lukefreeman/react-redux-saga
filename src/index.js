import "babel-polyfill";
import React from 'react';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';

import reducers from './reducers';
import App from './App';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
    sagaMiddleware
))(createStore);  

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(mySaga);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#app'));

module.hot.accept();