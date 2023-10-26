chrome.storage.sync.get(['tipoLugar'], function(result) {
    
    let lugar = result.tipoLugar || 'mcdonalds';

    navigator.geolocation.getCurrentPosition(function(position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const url = `https://www.google.com/maps/search/${lugar}/@${latitud},${longitud}`;
        chrome.tabs.create({ url: url });
    });
});

