/**
 *   ASYNC/AWAIT
 *      1. Son una abstracción de mayor nivel sobre las promesas. Este tipo de funciones,
 *         se basan en promesas.
 *      2. Son una combinación de promesas y generadores.
 *      3. Hacen que el código parezca sincrono, pero es asincrono y no bloquea detrás de escena.
 *      4. Siempre van a retornar una promesa.
 */

const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 2000)
    });
}

const doSomething = async() => {
    console.log(await doSomethingAsync());
}

const after = () => {
    setTimeout(() => {
        console.log('after');
    }, 2300);
}


console.log('before');
doSomething();
after();


/**
 * Formas definir una función asincrona.
 */

const aFunction = async() => {
    return 'test';
}

aFunction()
    .then(alert)

const aFunction = async() => {
    return Promise.resolve('Test')
}

aFunction()
    .then(alert)