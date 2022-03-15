const displayLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayUI(name);
    }
}

const addItem = () => {
    const inputField = document.getElementById('product-name');
    const name = inputField.value;
    if (!name) {
        return;
    }
    // display in the ui
    displayUI(name);
    // add to local storage
    addToCart(name);
    // clear the input field
    inputField.value = '';
}
const displayUI = name => {
    const ul = document.getElementById('show-items');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const placeOrder = () => {
    document.getElementById('show-items').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorage();