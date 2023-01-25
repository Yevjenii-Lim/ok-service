import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';

console.log('copart extention');
// const body = document.body('.row .no-margin');
// interface props {
//   test: string;
// }

type props = {
  test?: string;
};

const App: React.FC<props> = ({ test }: props) => {
  return (
    <>
      {' '}
      <div className="lot-details-page panel panel-heading">
        <h3>OK Service</h3>
      </div>
      <div className="panel-content">
        <div className="clearfix">
          <label
            htmlFor="location"
            data-name="lotdetailSaleinformationlocationlabel"
          >
            Delivery from:
          </label>
          <span>
            <a
              href="google.com"
              target="_blank"
              data-name="lotdetailSaleinformationlocationvalue"
            >
              {test}
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

function waitForElm(selector) {
  console.log('wait for element');
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      // console.log(mutations);
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

let reactRoot;

waitForElm(
  '#bid-information-id > div.print-lot-banner.clearfix.desktop-only.borderNone'
).then((elm: HTMLElement) => {
  elm.style.display = 'none';
  waitForElm('#bid-information-id').then((elm: HTMLElement) => {
    console.log('Element is ready');
    elm.appendChild(rootElement);
    reactRoot = ReactDOM.createRoot(document.getElementById('extensionRoot'));

    waitForElm(
      '#lot-details > div > div.container-fluid.lot-details-description > div > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0-i > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width > div > div:nth-child(24) > div > span'
    ).then((link: HTMLElement) => {
      reactRoot.render(
        <React.StrictMode>
          <App test={link.textContent} />
        </React.StrictMode>
      );
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // listen for messages sent from background.js
  if (request.message === 'hello!') {
    console.log('url changed');
    setTimeout(() => {
      waitForElm(
        '#bid-information-id > div.print-lot-banner.clearfix.desktop-only.borderNone'
      ).then((elm: HTMLElement) => {
        elm.style.display = 'none';
        waitForElm('#bid-information-id').then((elm: HTMLElement) => {
          console.log('Element is ready');
          reactRoot.unmount();
          elm.appendChild(rootElement);
          reactRoot = ReactDOM.createRoot(
            document.getElementById('extensionRoot')
          );

          reactRoot.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
          );
        });
      });
    }, 1000);
  }
});
