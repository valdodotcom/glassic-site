import { useContext, useState } from 'react'
import CartContext from '../../pages/store/cart-context';

export default function ProductItem({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (product) => {
    const cartItem = {
      product_id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      amount: 1
      };

    fetch('https://glassic-site-default-rtdb.firebaseio.com/cart.json', {
      method: 'POST',
      body: JSON.stringify(cartItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsAdded(true);
      })
      .catch(error => console.log(error));
  };

  const removeFromCartHandler = () => {
    cartCtx.removeItem(product.id);
    setIsAdded(false);
  };

  const cartItem = cartCtx.items.find(item => item.id === product.id);
  const cartItemAmount = cartItem ? cartItem.amount : 0;

  

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      {isAdded ? (
        <button onClick={removeFromCartHandler}>Remove from Cart</button>
      ) : (
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}
