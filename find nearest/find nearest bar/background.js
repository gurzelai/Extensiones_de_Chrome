chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason !== chrome.runtime.OnInstalledReason.INSTALL) {
      return;
    }
    chrome.tabs.create({
      url: 'chrome-extension://fjocajmimkpgoeijdiibifdbfnijmgae/options.html'
    });
})