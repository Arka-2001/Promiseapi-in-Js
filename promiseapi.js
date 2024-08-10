//Promiseall
// (
//     Purpose: Waits for all promises in an iterable (e.g., an array) to be fulfilled or for any of them to be rejected.
// Behavior:
// Returns a single promise that resolves when all promises in the iterable resolve.
// If any promise is rejected, Promise.all immediately rejects with that reason, and other promises are ignored.
// The resolved value is an array of the resolved values of all the promises, in the order they were passed.
// )
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P1 Success");
//     }, 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P2 Success");
//     }, 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P3 success");
//         // reject("P3 fail");
//     }, 2000);
// });

// // Pass the promises as an array to Promise.all
// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values); // ["P1 Success", "P2 Success", "P3 Success"]
// })
// .catch((err)=>{
//     console.log(err);
// })

//Promise allsettled
// (Purpose: Waits for all promises in an iterable to either resolve or reject.
//     Behavior:
//     Returns a single promise that resolves when all promises have either resolved or rejected.
//     The resolved value is an array of objects, each representing the outcome of each promise (either { status: "fulfilled", value: ... } or { status: "rejected", reason: ... }).

// )
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P1 Success");
//     }, 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P2 Success");
//     }, 1000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         //resolve("P3 success");
//         reject("P3 fail");
//     }, 2000);
// });

// // Pass the promises as an array to Promise.all
// Promise.allSettled([p1, p2, p3]).then((values) => {
//     console.log(values); // ["P1 Success", "P2 Success", "P3 Success"]
// })
// .catch((err)=>{
//     console.log(err);
// })

//Primise race
// (
//     Purpose: Returns a promise that settles as soon as any one of the promises in the iterable settles (either resolves or rejects).
// Behavior:
// The returned promise resolves or rejects with the value or reason of the first settled promise.
// )
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         reject("P1 Success");
//     }, 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("P2 Success");
//     }, 7000);
// });

// const p3 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         //resolve("P3 success");
//         reject("P3 fail");
//     }, 2000);
// });

// // Pass the promises as an array to Promise.all
// Promise.race([p1, p2, p3]).then((values) => {
//     console.log(values); // ["P1 Success", "P2 Success", "P3 Success"]
// })
// .catch((err)=>{
//     console.log(err);
// })

//Promise any
// (Purpose: Returns a promise that resolves as soon as any one of the promises in the iterable resolves.
//     Behavior:
//     The returned promise resolves with the value of the first fulfilled promise.
//     If all promises are rejected, Promise.any rejects with an AggregateError, which is an object that combines all individual rejection reasons.)
const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("P1 Success");
    }, 3000);
});

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("P2 Success");
    }, 7000);
});

const p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        //resolve("P3 success");
        reject("P3 fail");
    }, 2000);
});

// Pass the promises as an array to Promise.all
Promise.any([p1, p2, p3]).then((values) => {
    console.log(values); // ["P1 Success", "P2 Success", "P3 Success"]
})
.catch((err)=>{
    console.log(err);
    console.log(err.errors);
})
