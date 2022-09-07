import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Facebook from './Facebook'
const domain = 'dev-1g4y8w4q.us.auth0.com'
const clientId = 'zNE2cevTE08cMpabDQvyBwyoZThrOKnN'
alert(domain)
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

