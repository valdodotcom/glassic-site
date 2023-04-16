import MainCard from "../ui/MainCard";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <section>
      {products.map((product) => (
        <MainCard key={product.id}>
            <ProductItem key={product.id} product={product} />
        </MainCard>
      ))}
    </section>
  );
}
