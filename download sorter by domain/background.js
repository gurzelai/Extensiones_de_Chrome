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
    var domain = getDomain(item.url);
    console.log(domain)
    if (domain !== null) {
        var newFilename = domain + "/" + item.filename;
        suggest({ filename: newFilename, conflict_action: "uniquify" });
    } else {
        suggest({}); // No se pudo obtener el dominio, seguir con el nombre original.
    }
});