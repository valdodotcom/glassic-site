import { Link, Route, Routes } from "react-router-dom";
import Card from "../ui/Card";
import CategoryItem from "./CategoryItem";
import CategoryProductsPage from "../../pages/CategoryProducts";

export default function CategoryList({ categories }) {
  
  return (
    <section>
      {categories.map((category) => (
        <Card key={category.id}>
          <Link to={`/products/${category.id}`}>
            <CategoryItem category={category} />
          </Link>
        </Card>
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