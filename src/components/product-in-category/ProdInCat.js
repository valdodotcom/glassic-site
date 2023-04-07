import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/products/ProductList";
import Card from "../../components/ui/Card";

export default function ProductListPage() {
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://glassic-site-default-rtdb.firebaseio.com/categories/${categoryId}/products.json`)
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
  }, [categoryId])

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <Card>
      <h2>{categoryId}</h2>
      <ProductList products={loadedProducts} />
    </Card>
  )
}