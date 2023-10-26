document.getElementById('guardar').addEventListener('click', function() {
    const tipoLugar = document.getElementById('tipoLugar').value;
    chrome.storage.sync.set({tipoLugar: tipoLugar}, function() {
        alert('Place saved');
    });
});
