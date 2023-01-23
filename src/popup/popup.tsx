import React from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
// import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';

const Test = <img src="react.png" alt="" />;

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
document.body.appendChild(rootElement);
// const root = createRoot(rootElement);
// const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement);

// root.render(
//   <StrictMode>
//     <Test />
//   </StrictMode>
// );

ReactDOM.render(Test, rootElement);
