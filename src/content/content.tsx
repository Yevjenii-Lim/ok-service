import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';

console.log('copart extention');
// const body = document.body('.row .no-margin');

const App: React.FC<{}> = () => {
  return <h1>Hello world</h1>;
};

const rootElement = document.createElement('div');
// const row = document.querySelector('.row.no-margin');
const bidInfo = document.getElementById('bid-information-id');
// const ads = document.getElementById('copart-r-view-2');
// ads.style.display = 'none';
const body = document.body;
rootElement.setAttribute('id', 'extensionRoot');
bidInfo.appendChild(rootElement);

const reactRoot = ReactDOM.createRoot(document.getElementById('extensionRoot'));

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
