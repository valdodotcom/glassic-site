import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import styles from "../components/ui/Card.module.css"

export default function CategoryProductsPage({ match }) {
//   console.log(`match: ${match}`);
  const categoryId = match;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let url = "https://glassic-site-default-rtdb.firebaseio.com/products.json";

    if (categoryId) {
      url += `?orderBy="category"&equalTo="${categoryId}"`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const products = [];
        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
        }
        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, [categoryId]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      {categoryId ? (
        <h2>Products in category: {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2>
      ) : (
        <h2>All products</h2>
      )}
      <ProductList products={loadedProducts} />
      <div className={styles.actions}>
        <Link to="/all-products"><button>Shop All Products</button></Link>
      </div>
    </div>
  );
}
