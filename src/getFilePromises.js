//getting users and username with promises 
const getUserData = () => {
    return fetch('/users.json')
        .then(response => response.json())
        .then(users => users[0])
        .then(user => fetch(`/users/${user.name}`))
        .then(userResponse = user.json())
};

getComputedStyle();


//getting users and username with async/await

const getUserData = async() => {
    const response = await fetch('/users.json');
    const users = await response.json();
    const user = users[0];
    const userResponse = await fetch(`/users/${user.name}`);
    const userData = await userResponse.json();
    return userData;
}

getUserData();