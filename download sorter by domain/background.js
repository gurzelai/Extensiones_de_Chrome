function getDomain(url) {
    const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
    if (match !== null && match.length > 1) {
        const domainParts = match[1].split('.');
        if (domainParts.length >= 2) {
            return domainParts[domainParts.length - 2] + '.' + domainParts[domainParts.length - 1];
        }
    }
    return null;
}

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    
    chrome.storage.local.get('status', function(data) { 
        console.log(data)
        console.log(Object.keys(data).length === 0)
        console.log(data.status ==true)
        var isEnabled = false
        if ((Object.keys(data).length === 0) || (data.status ==true)){
            isEnabled = true
        }
        console.log('Estado recuperado:', isEnabled);
        if (isEnabled) {
            var domain = getDomain(item.url);
            if (domain !== null) {
                var newFilename = domain + "/" + item.filename;
                console.log(newFilename)
                suggest({ filename: newFilename, conflict_action: "uniquify" });
            }
        }
    })
    return true //con esto si es false tarda en abrir la ventana
});


// chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
//     var domain = getDomain(item.url);
//     console.log(domain)
//     if (domain !== null) {
//         var newFilename = domain + "/" + item.filename;
//         suggest({ filename: newFilename, conflict_action: "uniquify" });
//     } else {
//         suggest({}); // No se pudo obtener el dominio, seguir con el nombre original.
//     }
// });