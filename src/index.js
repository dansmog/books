import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import the index reducer
import rootReducer from './reducers/index';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create store
let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
