const fetch = require('node-fetch');
const fs = require('fs');

const URL_API = 'https://rickandmortyapi.com/api/character';
/*
const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

const json = response => response.json();

fetch('https://rickandmortyapi.com/api/character')
    .then(status)
    .then(json)
    .then(data => {
        const dataApi = JSON.stringify(data);
        fs.writeFile('files/api.json', dataApi, (err) => {
            if (err) throw err
        })
    })
    .catch(err => {
        console.error(`Request failed ${err}`);
    })
    */

const getDataApi = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = JSON.stringify(data);
        fs.writeFile('files/apiRick-Morty.json', results, (err) => {
            if (err) throw err
        });
    } catch (error) {
        console.error(`Ha habido un error de consulta a ${url}, ${error}`)
    }
};

getDataApi(URL_API);

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))