navigator.geolocation.getCurrentPosition(function(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const url = `https://www.google.com/maps/search/mcdonalds/@${latitud},${longitud}`;
    chrome.tabs.create({ url: url });
})