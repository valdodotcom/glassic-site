import { useState, useEffect } from 'react';
import CartItem from './CartItem';

export default function CartList() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://glassic-site-default-rtdb.firebaseio.com/cart.json')
      .then(response => response.json())
      .then(data => {
        const cartItemsArray = [];
        for (const key in data) {
          cartItemsArray.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            amount: data[key].amount
          });
        }
        setCartItems(cartItemsArray);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
