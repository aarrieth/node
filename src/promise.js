/*
const isItDontYet = new Promise((resolve, reject) => {
    if (true) {
        resolve('Here is the thing I built');
    } else {
        reject('I still working on something else yet');
    }
});

const checkIfItsDone = () => {
    isItDontYet
        .then(ok => {
            console.log(ok);
        })
        .catch(err => console.error(err))
}

checkIfItsDone();

*/

function hello(name) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(`Hello ${name}`);
            }, 2000);
        } else {
            //reject(new Error(err => console.error(err)))
            reject(`Whops... ${name} no es un nombre valido`);
        }
    })
}

function talk(name) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                console.log('Bla... Bla... Bla..!');
                resolve(name)
            }, 1000);
        } else {
            reject('Whop... no puedes hablar!');
        }
    });
}


function godBye(name) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                console.log('Adiós, Ha sido un placer charlar contigo!');
                resolve(name);
            }, 2000);
        } else {
            reject('Falló la comunicación');
        }
    });
}

hello('alfonso')
    .then(name => console.log(name))
    .then(talk)
    .then(talk)
    .then(talk)
    .then(talk)
    .then(godBye)
    .catch(err => console.error(err))