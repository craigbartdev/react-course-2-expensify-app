/*
//object destructuring
const person = {
    name: 'Craig',
    age: 21,
    location: {
        city: 'Boston',
        temp: 51
    }
};

const { name: firstName = 'Anon', age } = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


//array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'Florida'] = address;
console.log(`You are in ${city}, ${state}.`);
*/
const item = ['Coffee (iced)', '$2.00', '$2.55', '$2.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);