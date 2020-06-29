'use strict';

console.log('Hola... estoy usando Node');

setTimeout(() => {
    console.log('Me ejecuté despúes de 10 segundos');
}, 10000);

setInterval(() => {
    console.log('Me ejecuto cada segundo');
}, 1000);