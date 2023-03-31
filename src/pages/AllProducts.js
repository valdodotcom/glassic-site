import ProductList from "../components/products/ProductList";
export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "This is product A",
      price: 9.99,
    },
    {
      id: 2,
      name: "Product B",
      description: "This is product B",
      price: 14.99,
    },
    {
      id: 3,
      name: "Product C",
      description: "This is product C",
      price: 19.99,
    },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={products} />
    </div>
  );
}
