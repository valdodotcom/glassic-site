import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CategoryList from "../../components/categories/CategoryList";
import MainCard from "../../components/ui/MainCard";
import styles from "../../components/ui/Card.module.css"

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
    return (
      <MainCard>
        <h2>Our Categories</h2>
          <p>Loading...</p>
        <div className={styles.actions}>
          <Link to="/all-products"><button>Shop All Products</button></Link>
        </div>
       </MainCard>
   );
  }

  return (
    <MainCard>
      <h2>Our Categories</h2>
        <CategoryList categories={loadedCategories} />
      <div className={styles.actions}>
        <Link to="/all-products"><button>Shop All Products</button></Link>
      </div>
     </MainCard>
 );
}
