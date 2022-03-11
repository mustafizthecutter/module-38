console.log("hi dipi");
function callingName() {
    console.log("i am the first");
}
console.log("hi robin");
// setTimeout(callingName, 6000);
setTimeout(function () {
    console.log("i am waiting");
}, 6000)
setTimeout(() => {
    console.log("chiku chiku");
}, 3000)
console.log("hi tanjil");
