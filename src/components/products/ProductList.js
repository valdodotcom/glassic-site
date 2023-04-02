import Card from "../ui/Card";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <section>
      {products.map((product) => (
        <Card>
            <ProductItem key={product.id} product={product} />
        </Card>
      ))}
    </section>
  );
}
