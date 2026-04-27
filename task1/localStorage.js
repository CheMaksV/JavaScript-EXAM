export function save(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

export function load() {
    const data = localStorage.getItem('items');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}
