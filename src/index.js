import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider as BusProvider} from '@/hooks/useBus';
import { Provider } from 'react-redux'
import store from '@/redux'

import '@/styles/index.less'


ReactDOM.render(
    <BusProvider>
        <Provider store={store}>
            <App></App>
        </Provider>
    </BusProvider>, 
    document.getElementById('root')
)