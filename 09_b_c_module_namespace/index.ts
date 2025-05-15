import { UserProfile } from "./interfaces/userProfile";
import { Product } from "./interfaces/product";

const user: UserProfile = {
  id: 1,
  username: "komal",
  email: "komal@gmail.com",
};

const product: Product = {
  id: 101,
  name: "T-Shirt",
  price: 19.99,
};
  
console.log("User:", user);
console.log("Product:", product);
