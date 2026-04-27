import {save, load} from "./localStorage.js";
import {showError, clearError} from "./error.js";

const form = document.forms.form;
const list = document.getElementById('list');
const sortName = document.getElementById('sortNameBtn');
const sortValue = document.getElementById('sortValueBtn');
const deleteBtn = document.getElementById('deleteBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

let items = load();
let selected = [];
render();

// rendering
function render() {
    list.innerText = '';

    items.forEach((item) => {
        let infoDiv = document.createElement('div');
        infoDiv.innerText = `${item.name}=${item.value}`;
        infoDiv.style.cursor = 'pointer';
        infoDiv.style.padding = '3px';

        // selecting item from a list
        infoDiv.onclick = () => {
            if (selected.includes(item.id)) {
                selected = selected.filter(i => i !== item.id);
            } else {
                selected.push(item.id);
            }
            render();
        };

        // highlight selected
        if (selected.includes(item.id)) {
            infoDiv.style.background = '#91DDFF';
        }

        list.appendChild(infoDiv);
    });
}


// Add element
form.onsubmit = (ev) => {
    ev.preventDefault();
    let value = form.input.value.trim();
    let [name, val] = value.split('=');
    if (!name || !val || !value.includes('=')) {
        return showError();
    }

    clearError();

    items.push({
        id: Date.now(),
        name: name.trim(),
        value: val.trim()
    });
    save(items);
    render();
    form.input.value = '';
};


// Sort by name
sortName.onclick = () => {
    items.sort((a, b) => a.name.localeCompare(b.name));
    render();
};


// Sort by value
sortValue.onclick = () => {
    items.sort((a, b) => a.value.localeCompare(b.value));
    render();
}


// Delete selected
deleteBtn.onclick = () => {
    items = items.filter(item => !selected.includes(item.id));

    selected = [];
    save(items);
    render();
}

// Delete All
deleteAllBtn.onclick = () => {
    items = [];
    save(items);
    render();
};
