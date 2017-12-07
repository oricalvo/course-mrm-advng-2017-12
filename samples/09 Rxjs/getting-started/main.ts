import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";

const obs = Observable.interval(1000);

obs.subscribe(function(val) {
    console.log(val)
});

setTimeout(function() {
    obs.subscribe(function(val) {
        console.log(val)
    });
}, 5000);


// const observers = [];
//
// let i=0;
//
// setInterval(function() {
//     const cur = i++;
//
//     for(const o of observers) {
//         o.next(cur);
//     }
// }, 1000);
//
// const observable = Observable.create(observer => {
//     observers.push(observer);
//
//     // observer.next(2);
//     // observer.next(3);
//     //observer.complete();
// });
//
// console.log("before");
// const suscription = observable.subscribe({
//     next: function(value) {
//         console.log(value);
//
//         if(value == 10) {
//             suscription.unsubscribe();
//         }
//     }
// });
// console.log("after");
//
//
// console.log("before");
// const suscription2 = observable.subscribe({
//     next: function(value) {
//         console.log(value);
//
//         if(value == 5) {
//             suscription2.unsubscribe();
//         }
//     }
// });
// console.log("after");





// function *generate() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// function *superGenerate() {
//     yield *generate();
//     yield 4;
//     yield 5;
//     yield 6;
// }

// for(const num of superGenerate()) {
//     console.log(num);
// }
