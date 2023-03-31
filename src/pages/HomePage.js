import AboutSection from "./home-page-sections/About";
import ProductsSection from "./home-page-sections/Products";
import ContactSection from "./home-page-sections/Contact";

export default function HomePage() {
    return <section>
    <h1>Glassic Plaques</h1>
    <div><ProductsSection /></div>
    <div><AboutSection /></div>
    <div><ContactSection/></div>
    </section>
}