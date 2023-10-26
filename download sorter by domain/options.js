// Store status data in the "local" storage area.
const storage = chrome.storage.local;

// Get at the DOM controls used in the sample.
const resetButton = document.querySelector('button.reset');
const submitButton = document.querySelector('button.submit');
const textarea = document.getElementById('toggleCheckbox');

// Load any status that may have previously been saved.
loadChanges();

submitButton.addEventListener('click', saveChanges);
resetButton.addEventListener('click', reset);

async function saveChanges() {
  // Get the current status snippet from the form.
  const statusCode = textarea.checked;
  // Check that there's some code there.
  
  // Save it using the Chrome extension storage API.
  await storage.set({ status: statusCode });
  message('Settings saved, actual status: ' + statusCode);
}

function loadChanges() {
  storage.get('status', function (items) {
    // To avoid checking items.status we could specify storage.get({status: ''}) to
    // return a default value of '' if there is no status value yet.
    
    if (Object.getOwnPropertyNames(items).length === 0) {
      message('There is no data to load but I will do it for you.');  
      textarea.checked = items.status; 
    }
    else{
      textarea.checked = items.status;
      message('Loaded saved status:' + items.status);
    }
  });
}

async function reset() {
  // Remove the saved value from storage. storage.clear would achieve the same
  // thing.
  await storage.remove('status');
  message('Reset stored status');
  // Refresh the text area.
  textarea.checked = false;
}

let messageClearTimer;
function message(msg) {
  clearTimeout(messageClearTimer);
  const message = document.querySelector('.message');
  message.innerText = msg;
  messageClearTimer = setTimeout(function () {
    message.innerText = '';
  }, 3000);
}
