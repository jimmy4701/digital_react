import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Exercices from './Exercices';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Exercices />, document.getElementById('root'));
serviceWorker.unregister();
