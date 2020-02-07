//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// Disclaimer: This is my first try before the course (very OO)

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: []
};

const item = {
  id: 1,
  price: 3
};

function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

function addToCart(user, item) {
  const newUserHistory = deepClone(user);
  const newItemHistory = deepClone(item);

  newItemHistory.price = parseFloat(newItemHistory.price) * 1.03;
  newUserHistory.cart.push(newItemHistory);

  return newUserHistory;
}

function buyItem(user) {
  const newUserHistory = deepClone(user);

  newUserHistory.purchases = newUserHistory.cart.slice(
    0,
    newUserHistory.cart.lenght
  );

  newUserHistory.cart = [];

  return newUserHistory;
}

const userTimeline = [];
userTimeline.push(user);

const userWithItem = addToCart(user, item);
userTimeline.push(userWithItem);

const userBought = buyItem(userWithItem);
userTimeline.push(userBought);

console.log(userTimeline);
