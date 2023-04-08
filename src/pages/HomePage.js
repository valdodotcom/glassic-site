import { useParams } from "react-router-dom";
import { CategoryRoute } from "../components/categories/CategoryList";
import AboutSection from "./home-page-sections/About";
import CategoriesSection from "./home-page-sections/AllCategories";
import ContactSection from "./home-page-sections/Contact";

export default function HomePage() {
    var params = useParams();
    params = JSON.stringify(params);
    const regex = /(?<=\/)\w+/;
    const categoryId = params.match(regex);
    console.log(`params: ${categoryId}`);

    if (categoryId) {
        return <CategoryRoute />
    }
    return <section>
    <h1>Glassic Plaques</h1>
    <div><CategoriesSection /></div>
    <div><AboutSection /></div>
    <div><ContactSection/></div>
    </section>
}