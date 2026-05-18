export default function renderUsers(users, usersDiv) {
    usersDiv.innerText = '';

    users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerText = `${user.id} - ${user.name}`;

        let userBtn = document.createElement('button');
        userBtn.classList.add('userButton');
        userBtn.innerText = 'Details';

        userBtn.onclick = () => {
            window.location.href = `../user-details/user-details.html?id=${user.id}`;
        }

        userDiv.appendChild(userBtn);
        usersDiv.appendChild(userDiv);
    })
}
