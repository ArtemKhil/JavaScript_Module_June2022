let url = new URL(location.href);

let postId = JSON.parse(url.searchParams.get('id'));


for (const postIdKey in postId) {

    let postDetailsDiv = document.createElement('div');
    postDetailsDiv.classList.add('post_details');
    postDetailsDiv.innerText = `${postIdKey}:${postId[postIdKey]}`;

    document.body.appendChild(postDetailsDiv);
}


let commentsButton = document.createElement('button');
commentsButton.innerText = 'Comments';
commentsButton.classList.add('comments_btn');
document.body.appendChild(commentsButton);


commentsButton.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerText = (`${comment.id}:${comment.body}`);

                document.body.appendChild(commentDiv);
                commentsButton.disabled = true;
            }

        });
};




