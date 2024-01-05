/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t)
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t)
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t)
    })
}

function calculateTime(t1, t2, t3) {
    const before = new Date().getTime();
    return wait1(t1*1000)
    .then(() => wait2(t2 * 1000))
    .then(() => wait3(t3 * 1000))
    .then(()=>{
        const after = new Date().getTime();
        const time = after - before;
        return time;
    })
}

module.exports = calculateTime;
