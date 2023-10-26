chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "idUnica",
        title: "Show results",
        contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    console.log("Menu click") //nunca cogera los que no hemos creado nosotros
    if (info.menuItemId == "idUnica") {
        var imageUrl = info.srcUrl;
        var api_key = 'acc_fefccd701de2757';
        var api_secret = '654f29220a44100647e45d46eb8aa692';

        fetch('https://api.imagga.com/v2/tags?image_url=' + imageUrl + '&language=en&limit=5', {
                headers: {
                    Authorization: 'Basic ' + btoa(api_key + ':' + api_secret)
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data.result, null, 4))
            });
    }
});