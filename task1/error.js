const form = document.forms.form;

let errorInput = form.input;
let errorDiv = document.createElement('div');
errorDiv.classList.add('error');
form.appendChild(errorDiv);

export function showError() {
    errorDiv.innerText = 'Формат: name=value';
    errorInput.classList.add('input-error');
}

export function clearError() {
    errorDiv.innerText = '';
    errorInput.classList.remove('input-error');
}
