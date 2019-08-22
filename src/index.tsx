import 'moment/locale/ja';
import 'ress';
import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Containers from './containers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Containers />, document.getElementById('root'));

serviceWorker.register();
