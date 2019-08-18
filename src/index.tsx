import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styledComponents';
import Containers from 'containers';
import 'moment/locale/ja';
import React from 'react';
import ReactDOM from 'react-dom';
import 'ress';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Containers />
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.register();
