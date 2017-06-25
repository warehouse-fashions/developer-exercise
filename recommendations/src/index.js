import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gallery />, document.getElementById('main'));
registerServiceWorker();
