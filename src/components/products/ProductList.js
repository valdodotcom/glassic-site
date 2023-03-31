import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <section>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
