export default function renderObjectTree(data, parent) {

    if (typeof data !== 'object' || data === null) {
        parent.append(String(data));
        return;
    }

    for (const key in data) {

        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add(String(key).toLowerCase().replace(/\s+/g, '-'));

        const title = document.createElement('strong');
        title.innerText = `${key}: `;
        sectionDiv.appendChild(title);

        const value = data[key];
        if (typeof value === 'object' && value !== null) {
            renderObjectTree(value, sectionDiv);
        } else {
            const valueSpan = document.createElement('span');
            valueSpan.textContent = String(value);
            sectionDiv.appendChild(valueSpan);
        }

        parent.appendChild(sectionDiv);
    }
}
