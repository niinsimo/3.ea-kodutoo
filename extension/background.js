/*
osa koodist võetud - https://developer.chrome.com/extensions/getstarted
*/
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {schemes: ['https'] },
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
