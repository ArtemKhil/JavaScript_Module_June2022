

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {

            let userDiv = document.createElement('div');
            userDiv.innerText = `${user.id}.${user.name}`
            userDiv.classList.add('user');

            let userBtn = document.createElement('button');
            userBtn.innerText = 'user details';
            userBtn.classList.add('user_details_btn');

            document.body.append(userDiv, userBtn);

            userBtn.onclick = function () {
                location.href = `user_details/user_details.html?id=${JSON.stringify(user)}`;
            };
        }
    });