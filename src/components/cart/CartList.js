import CartItem from './CartItem';
import Card from "../ui/Card";
// import ProductItem from "./ProductItem";

export default function CartList( {products} ) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://glassic-site-default-rtdb.firebaseio.com/cart.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       const cartItemsArray = [];
  //       for (const key in data) {
  //         cartItemsArray.push({
  //           id: key,
  //           name: data[key].name,
  //           price: data[key].price,
  //           amount: data[key].amount
  //         });
  //       }
  //       setCartItems(cartItemsArray);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <section>
      {products.map((product) => (
        <Card key={product.id}>
            <CartItem key={product.id} product={product} />
        </Card>
      ))}
    </section>
  );
}


//   return (
//     <div>
//       {cartItems.map(item => (
//         <CartItem key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }
