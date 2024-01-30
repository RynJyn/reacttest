import React from 'react';
import ReactDOM from 'react-dom/client';
import Paragraph from './Paragraph';

const h1Style = {
  background: "blue",
  color: "#fff"
};

const RANKS = {
  b: "Beginner",
  e: "Expert"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={h1Style}>{`I am currently a ${RANKS.b} at React, working towards becoming an ${RANKS.e}`}</h1>
    <Paragraph/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
