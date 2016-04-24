chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://icloud.com/#notes2";
  chrome.tabs.create({ url: newURL });
});
