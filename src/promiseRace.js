const fetch = require('node-fetch')


const getApiRickMorty = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(resolve => resolve.json())
        .then(data => console.log(data.results))
        .catch(err => console.error(err))
};

const getApiJsonPlaceHolder = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resolve => resolve.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

Promise.race([getApiRickMorty, getApiJsonPlaceHolder])
    .then(results => console.log(results))
    .catch(err => console.error(err))