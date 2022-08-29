let url = new URL(location.href);

let userId = JSON.parse(url.searchParams.get('id'));


function userRecursion(item, container) {

    for (const itemKey in item) {

        if (typeof item[itemKey] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${itemKey}:${item[itemKey]}`;
            container.appendChild(p);

        } else {

            userRecursion(item[itemKey], container);
        }
    }
}

let userDivWrap = document.createElement('div');
userDivWrap.classList.add('user_wrap');
document.body.appendChild(userDivWrap);

userRecursion(userId, userDivWrap);

let buttonPost = document.createElement('button');
buttonPost.innerText = 'Posts of user';
buttonPost.classList.add('posts_btn');
document.body.appendChild(buttonPost);


buttonPost.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {

                let postDiv = document.createElement('div');
                postDiv.innerText = `${post.title}`;
                postDiv.classList.add('post_details');

                buttonPost.disabled = true;

                let postsDetailsBtn = document.createElement('button');
                postsDetailsBtn.innerText = 'Show details';
                postsDetailsBtn.classList.add('show_details_btn');

                document.body.append(postDiv, postsDetailsBtn);


                postsDetailsBtn.onclick = function () {

                    location.href = `../post_details/post_details.html?id=${JSON.stringify(post)}`;
                };
            }
        })
};








