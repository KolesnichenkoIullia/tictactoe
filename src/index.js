import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './square'
import Game from './game'

const DeleteAccount = () => (
  <div>
  <p>Are you sure?</p>
  <button onClick={() => (alert("Hey, there"))}>Yep</button>
  <button onClick={() => (alert("Lalala"))}>No</button>
  </div>
);
  
ReactDOM.render(
  <div>
  <h1><center>Hello, world</center></h1> 
  <DeleteAccount/>
  </div>,
  document.getElementById('root')
);
  


