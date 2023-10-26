document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    
    console.log("AAAAAAAAAAAA")

    chrome.storage.local.get('status', function(result) {
        const isEnabled = result.status !== undefined ? result.status : false;

        if (isEnabled) {
            statusElement.textContent = 'Extension is currently active.';
        } else {
            statusElement.textContent = 'Extension is currently inactive.';
        }
    });
});
