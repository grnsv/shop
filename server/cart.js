function calculate(cart) {
  const newCart = cart;
  newCart.countGoods = newCart.contents.length;
  newCart.amount = newCart.contents.reduce((sum, item) => sum + item.quantity * item.price, 0);
  return newCart;
}

const add = (cart, req) => {
  cart.contents.push(req.body);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 2) };
};

const change = (cart, req) => {
  const find = cart.contents.find((el) => el.id_product === req.params.id);
  find.quantity += req.body.quantity;
  return { name: find.product_name, newCart: JSON.stringify(cart, null, 2) };
};

const remove = (cart, req) => {
  const find = cart.contents.find((el) => el.id_product === req.params.id);
  cart.contents.splice(cart.contents.indexOf(find), 1);
  const newCart = calculate(cart);
  return { name: find.product_name, newCart: JSON.stringify(newCart, null, 2) };
};

module.exports = {
  add,
  change,
  remove,
};
