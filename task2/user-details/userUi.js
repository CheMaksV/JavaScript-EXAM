import renderObjectTree from "../renderObjectTree.js";

export function renderUser(user, userDiv) {
    userDiv.innerText = '';

    renderObjectTree(user, userDiv);
}


export function renderPosts(posts, postsDiv) {
    postsDiv.innerText = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postP = document.createElement('p');
        postP.classList.add('post-info');
        postP.innerText = `${post.title}`;

        const postBtn = document.createElement('button');
        postBtn.classList.add('postBtn');
        postBtn.innerText = 'Details';

        postBtn.onclick = () => {
            window.location.href = `../post-details/post-details.html?id=${post.id}`;
        };

        postDiv.append(postP, postBtn);
        postsDiv.appendChild(postDiv);
    });
}
