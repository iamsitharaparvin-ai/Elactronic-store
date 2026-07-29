function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No Products Added</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;