import renderObjectTree from "../renderObjectTree.js";

export function renderPost(post, postDiv) {
    postDiv.innerText = '';

    renderObjectTree(post, postDiv);
}


export function renderComments(comments, commentsDiv) {
    commentsDiv.innerText = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const commentTitle = document.createElement('h3');
        commentTitle.classList.add('comment-title');
        commentTitle.innerText = comment.name;

        const commentEmail = document.createElement('a');
        commentEmail.classList.add('comment-email');
        commentEmail.href = `mailto:${comment.email}`;
        commentEmail.innerText = comment.email;

        const commentText = document.createElement('p');
        commentText.classList.add('comment-info');
        commentText.textContent = comment.body;

        commentDiv.append(commentTitle, commentEmail, commentText);
        commentsDiv.appendChild(commentDiv);
    });
}
