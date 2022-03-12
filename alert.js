console.log(12456);
// alert("dipu is coming");
const maComing = () => {
    alert("mizan is coming");
}
const askPicnic = () => {
    const response = confirm("tumi ki jaccho picnic e dipu?");
    console.log(response);
    if (response === true) {
        alert('ami picnic e jacchi');
    }
    else {
        alert('dure giya mor! taka nai');
    }
}
const askName = () => {
    const name = prompt("whats your name?");
    if (name) {
        console.log(name);
    }
    else {
        console.log('no input name');
    }

}