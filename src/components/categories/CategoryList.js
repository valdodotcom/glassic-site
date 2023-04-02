import Card from "../ui/Card";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories }) {
  return (
    <section>
      {categories.map((category) => (
        <Card>
            <CategoryItem key={category.id} category={category} />
        </Card>
      ))}
    </section>
  );
}
