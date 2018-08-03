import * as firebase from 'firebase'; //* as puts named exports on firebase var

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };

// //child_removed subscriber
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses') 
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []; //get data as array
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses') 
//     .on('value', (snapshot) => {
//         const expenses = []; //get data as array
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     }, (e) => {
//         console.log('error reading data', e);
//     });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Need to eat',
//     amount: 5000,
//     createdAt: 9584579889
// });

//database.ref('notes/-LDyiRRsJ_elbw1rcQ9R').remove();

// database.ref('notes').push({ //generates random id
//     title: 'Course Topics',
//     body: 'Firebase, React, Jest'
// });

// const firebaseNotes = {
//     notes: {
//         abcd: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         wxyz: {
//             title: 'Another note',
//             body: 'This is another note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '76',
//     title: 'Another note',
//     body: 'This is my other note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('Error with data fetching', e);
// });


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({ //.ref is to root of db, .set returns promise
//     name: 'Craig Bartholomew',
//     age: 21,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Brookline',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref().set('This is my data.'); //overwrites object with string

// database.ref('age').set(22); //needs reference to child to overwrite child
// database.ref('location/city').set('Seattle');//reference to child of child

// database.ref('attributes').set({
//     height: 67,
//     weight: 150
// }).then(() => {
//     console.log('Change is saved!');
// }).catch((e) => {
//     console.log('Change failed', e);
// });

// database.ref().remove()
//     .then(() => {
//         console.log('Remove Succeeded');
//     }).catch((e) => {
//         console.log('Remove failed '+ e.message);
//     });