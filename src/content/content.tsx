import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';

console.log('copart extention');
// const body = document.body('.row .no-margin');

const App: React.FC<{}> = () => {
  return (
    <>
      {' '}
      <div className="lot-details-page panel panel-heading">
        <h3>OK Service</h3>
      </div>
      <div className="panel-content"></div>
    </>
  );
};

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const rootElement = document.createElement('div');

rootElement.setAttribute('id', 'extensionRoot');
rootElement.classList.add('panel');
rootElement.classList.add('clr');

waitForElm(
  '#bid-information-id > div.print-lot-banner.clearfix.desktop-only.borderNone'
).then((elm: HTMLElement) => {
  elm.style.display = 'none';
  waitForElm('#bid-information-id').then((elm: HTMLElement) => {
    console.log('Element is ready');
    elm.appendChild(rootElement);
    const reactRoot = ReactDOM.createRoot(
      document.getElementById('extensionRoot')
    );

    reactRoot.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});
