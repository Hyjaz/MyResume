import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Info from './info.json'

ReactDOM.render(
  <App data={Info}/>,
  document.getElementById('root')
);
