interface UserProfile {
  id: number;
  username: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const user: UserProfile = {
  id: 1,
  username: "komal27",
  email: "komal@gmail.com",
};

const product: Product = {
  id: 101,
  name: "Wireless Headphones",
  description: "Noise-cancelling over-ear headphones.",
  price: 99.99,
};

function displayProduct(p: Product): void {
  console.log(`Product: ${p.name} - $${p.price}`);
}

function displayUser(u: UserProfile): void {
  console.log(`User: ${u.username} (${u.email})`);
}

displayProduct(product);
displayUser(user);
