document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const statusElement = document.getElementById('status');

    chrome.storage.local.get(['extensionEnabled'], function(result) {
        const isEnabled = result.extensionEnabled !== undefined ? result.extensionEnabled : true;

        if (isEnabled) {
            toggleCheckbox.checked = true;
            statusElement.textContent = 'Extension is currently active.';
        } else {
            toggleCheckbox.checked = false;
            statusElement.textContent = 'Extension is currently inactive.';
        }

        toggleCheckbox.addEventListener('change', function() {
            const isChecked = toggleCheckbox.checked;

            if (isChecked) {
                statusElement.textContent = 'Extension is currently active.';
            } else {
                statusElement.textContent = 'Extension is currently inactive.';
            }

            chrome.storage.local.set({ extensionEnabled: isChecked });
        });
    });
});
