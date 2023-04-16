import CartItem from './CartItem';
import MainCard from "../ui/MainCard";

export default function CartList( {products} ) {
  return (
    <section>
      {products.map((product) => (
        <MainCard key={product.id}>
            <CartItem key={product.id} product={product} />
        </MainCard>
      ))}
    </section>
  );
}
