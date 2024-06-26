
const githubAPIURL =  "https://api.github.com/users/";

const userProfile = document.getElementById('userProfile');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(user) {
    const response = await fetch(githubAPIURL + user);
    const responseData = await response.json();

    getUserInfo(responseData);
}

// Result 
function getUserInfo(user) {
    const userBox = `
        <div class="user-box">
            <div>
                <a href="${user.html_url}" target="_blank">
                    <img class="avetar" src="${user.avatar_url}" alt="${user.name}">
                </a>
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <div class="user-bio">
                    <p>${user.bio}</p>
                    <a href="${user.html_url}" target="_blank">View Profile</a>
                </div>
                <ul class="meta-data">
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
            </div>
        </div>
    `;
    userProfile.innerHTML = userBox;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
        search.value = '';
    }

})

async function getUser(user) {
    const response = await fetch(githubAPIURL + user);
    const responseData = await response.json();

    getUserInfo(responseData);
}

// Result 
function getUserInfo(user) {
    const userBox = `
        <div class="user-box">
            <div>
                <a href="${user.html_url}" target="_blank">
                    <img class="avetar" src="${user.avatar_url}" alt="${user.name}">
                </a>
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <div class="user-bio">
                    <p>${user.bio}</p>
                    <a href="${user.html_url}" target="_blank">View Profile</a>
                </div>
                <ul class="meta-data">
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
            </div>
        </div>
    `;
    userProfile.innerHTML = userBox;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
        search.value = '';
    }

})