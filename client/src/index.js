import React from 'react';
import ReactDOM from 'react-dom';

import configuration from './configuration';
import './index.css';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

console.log('Configuration', configuration);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
