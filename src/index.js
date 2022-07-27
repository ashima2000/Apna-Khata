import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider }from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="6c04a952-b4a6-4b56-a4a7-8a34e59ec87f" language ="en-US">
    <Provider>   
    <App /> ,
    </Provider>

  </SpeechProvider>,
document.getElementById('root') );
