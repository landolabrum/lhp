import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);
});

ReactDOM.render(
  <App />
  , document.getElementById('root')
)



