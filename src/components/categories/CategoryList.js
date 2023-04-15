import { Link, Route, Routes, useParams } from "react-router-dom";
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
  // var params = useParams();
  // params = JSON.stringify(params);
  // const regex = /(?<=\/)\w+/;
  // const categoryId = params.match(regex);
  // console.log(`params: ${categoryId}`);
  return (
    <Routes>
      <Route key={categoryId} path={`/products/${categoryId}`} element={<CategoryProductsPage match={categoryId} />}/>
    </Routes>
  );
}