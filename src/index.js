import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';


// ReactDOM.render( <> <MyApp /> </>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
