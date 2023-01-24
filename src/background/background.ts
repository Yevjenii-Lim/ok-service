// console.log('hello from backround');

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log(msg);
//   console.log(sender);
//   sendResponse();
// });

let urlCopy;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  if (changeInfo.url) {
    console.log(changeInfo.url);
    // do something here
    if (
      changeInfo.url.match('https://.*.copart.com/.*') &&
      changeInfo.url != urlCopy
    ) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabId, {
          message: 'hello!',
          url: changeInfo.url,
        });
      }, 1000);
      urlCopy = changeInfo.url.slice(0, -1);
    }
  }
});
