const lostForm = document.getElementById('lost-form');
const foundForm = document.getElementById('found-form');
const lostItemInput = document.getElementById('lost-item');
const foundItemInput = document.getElementById('found-item');
const lostItemsList = document.getElementById('lost-items-list');
const foundItemsList = document.getElementById('found-items-list');


let lostItems = [];
let foundItems = [];


function renderItems() {
    lostItemsList.innerHTML = '';
    foundItemsList.innerHTML = '';

  
    lostItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        lostItemsList.appendChild(li);
    });

    foundItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        foundItemsList.appendChild(li);
    });
}


lostForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const lostItemDescription = lostItemInput.value.trim();

    if (lostItemDescription) {
        lostItems.push(lostItemDescription);
        lostItemInput.value = '';
        renderItems();
    }
});


foundForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const foundItemDescription = foundItemInput.value.trim();

    if (foundItemDescription) {
        foundItems.push(foundItemDescription);
        foundItemInput.value = '';
        renderItems();
    }
});

// Initial render on page load
renderItems();