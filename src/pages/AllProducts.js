import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://glassic-site-default-rtdb.firebaseio.com/products.json')
      .then(response => response.json())
      .then(data => {
        const products = [];
        for (const key in data) {
          const product = {
            id: key,
            ...data[key]
          };
          products.push(product)
        }
        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, [])

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={loadedProducts} />
    </div>
  );
}
