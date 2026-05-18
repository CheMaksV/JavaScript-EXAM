import axiosObject from '../axios.js'
import urls from "../urls.js";
import {renderUser, renderPosts} from "./userUi.js";

const userDiv = document.querySelector('.user');
const postsDiv = document.querySelector('.posts');
const postsBtn = document.querySelector('.postsBtn');

const userId = new URLSearchParams(location.search).get('id');

async function getUser() {
    try {
        const res = await axiosObject.get(`${urls.users}/${userId}`);
        const user = res.data;

        renderUser(user, userDiv);
    } catch (error) {
        userDiv.innerText = 'Failed to load user';
        console.error(error);
    }
}


postsBtn.onclick = async () => {
    try {
        postsBtn.disabled = true;
        postsDiv.innerText = 'Loading posts...';

        const res = await axiosObject.get(`${urls.users}/${userId}${urls.posts}`);
        const posts = res.data;

        renderPosts(posts, postsDiv);
    } catch (error) {
        postsDiv.innerText = 'Failed to load posts';
        console.error(error);
    } finally {
        postsBtn.disabled = false;
    }
}

userDiv.innerText = 'Loading user...';

await getUser();
