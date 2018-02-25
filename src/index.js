import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
//import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

ReactDOM.render(
    <Router basename="/">
        <Provider store={store}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Provider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
