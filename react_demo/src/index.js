import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import '@fortawesome/fontawesome-free/css/all.css'

// import './index.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import {Pageprovider} from './component/store/pageContext';


ReactDOM.render(
  <React.StrictMode>
      <Pageprovider>
         <App2/>
      </Pageprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
