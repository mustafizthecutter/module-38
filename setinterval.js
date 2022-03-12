console.log("hi pudi");
console.log("hi mudi");
setTimeout(() => {
    console.log('hi borinn');
}, 4000)
let seconds = 0;
const timeID = setInterval(() => {
    // seconds++
    console.log(seconds);
    if (seconds > 15) {
        clearInterval(timeID);
    }
}, 1000)
console.log("chiku chiku");