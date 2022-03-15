const addItem = () => {
    const inputField = document.getElementById('product-name');
    const name = inputField.value;
    // display in the ui
    displayUI(name);
    // add to local storage
    addToCart(name);
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
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}