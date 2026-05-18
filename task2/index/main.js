import axiosObject from "../axios.js";
import urls from "../urls.js";
import renderUsers from "./ui.js";

const usersDiv = document.querySelector('.users');

async function getUsers() {
    try {
        const res = await axiosObject.get(urls.users);
        const users = res.data;

        renderUsers(users, usersDiv);
    } catch (error) {
        usersDiv.innerText = 'Failed to load users';
        console.error(error);
    }
}

usersDiv.innerText = 'Loading users...';

await getUsers();


