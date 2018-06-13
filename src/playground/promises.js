const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ //gets passed down to then as data
            name: 'Craig',
            age: 21
        });
        // reject('Something went wrong');
    }, 4000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 4000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});


console.log('after');
