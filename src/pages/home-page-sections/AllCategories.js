import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CategoryList from "../../components/categories/CategoryList";
import Card from "../../components/ui/Card";

export default function CategoriesSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://glassic-site-default-rtdb.firebaseio.com/categories.json')
      .then(response => response.json())
      .then(data => {
        const categories = [];
        for (const key in data) {
          const category = {
            id: key,
            ...data[key]
          };
          categories.push(category)
        }
        setIsLoading(false);
        setLoadedCategories(categories);
      });
  }, [])

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <Card>
      <h2>Our Categories</h2>
      <CategoryList categories={loadedCategories} />
      <div>
        <Link to="/products">Shop All Products</Link>
      </div>
    </Card>
  );
}