import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store=createStore(reducer);
console.log(store.getState())

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
};

store.dispatch(action);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//Provider inject store into react components
//const store passed into Provider

