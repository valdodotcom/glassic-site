import { Link, Route, Routes } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import CategoryProductsPage from "../../pages/CategoryProducts";

export default function CategoryList({ categories }) {
  
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={`/products/${category.id}`}>
            <CategoryItem category={category} />
          </Link>
        </div>
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