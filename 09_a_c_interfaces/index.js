"use strict";
const user = {
    id: 1,
    username: "komal27",
    email: "komal@gmail.com",
};
const product = {
    id: 101,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 99.99,
};
function displayProduct(p) {
    console.log(`Product: ${p.name} - $${p.price}`);
}
function displayUser(u) {
    console.log(`User: ${u.username} (${u.email})`);
}
displayProduct(product);
displayUser(user);
