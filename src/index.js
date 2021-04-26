import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('we are in production mode!');
}


const title = 'frontend-service';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
