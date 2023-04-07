import { Link, Route, Routes } from "react-router-dom";
import Card from "../ui/Card";
import CategoryItem from "./CategoryItem";
import CategoryProductsPage from "../../pages/CategoryProducts";

export default function CategoryList({ categories }) {
  return (
    <section>
      <Routes>
        {categories.map((category) => (
          <Route 
            key={category.id} 
            path={`/products/${category.id}`}
            element={<CategoryProductsPage match={category.id} />}
          />
        ))}
      </Routes>
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