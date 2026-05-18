import axiosObject from '../axios.js'
import urls from "../urls.js";
import {renderPost, renderComments} from "./postUi.js";

const postDiv = document.querySelector('.post');
const commentsDiv = document.querySelector('.comments');

const postId = new URLSearchParams(location.search).get('id');

async function getPost() {
    try {
        const res = await axiosObject.get(`${urls.posts}/${postId}`);
        const post = res.data;

        renderPost(post, postDiv);
    } catch (error) {
        postDiv.innerText = 'Failed to load post';
        console.error(error);
    }
}


async function getComments() {
    try {
        const res = await axiosObject.get(`${urls.posts}/${postId}${urls.comments}`);
        const comments = res.data;

        renderComments(comments, commentsDiv);
    } catch (error) {
        commentsDiv.innerText = 'Failed to load comments';
        console.error(error);
    }
}

postDiv.innerText = 'Loading post...';
commentsDiv.innerText = 'Loading comments...';

await Promise.all([
    getPost(),
    getComments()
]);
