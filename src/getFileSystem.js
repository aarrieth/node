/**
 *  --PROMISIFCACION---
 *      Una forma de poder usar una función clásica de JavaScript que toma
 *      una devolución de llamada y hacer que devuelva una PROMESA
 */

const fs = require('fs');
const file = '../files/data.json';

const getFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (!err) {
                resolve(JSON.parse(data))
                return
            }
            reject(err);
        });
    });
}

getFile(file)
    .then(data => console.log(data))
    .catch(err => console.error(err))