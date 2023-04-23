import { Link, Route, Routes } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import CategoryProductsPage from "../../pages/CategoryProducts";
import SubCard from "../ui/SubCard";
import styles from '../ui/Card.module.css'

export default function CategoryList({ categories }) {
  return (
    <section className={styles.sectionGrid}>
      {categories.map((category) => (
        <SubCard key={category.id}>
          <Link to={`/products/${category.id}`}>
            <CategoryItem category={category} />
          </Link>
        </SubCard>
      ))}
    </section>
  );
}

export function CategoryRoute({ categoryId }) {
  return (
    <Routes>
      <Route key={categoryId} path={`/products/${categoryId}`} element={<CategoryProductsPage match={categoryId} />}/>
    </Routes>
  );
}